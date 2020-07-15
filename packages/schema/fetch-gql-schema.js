/* eslint-disable no-console, import/no-extraneous-dependencies */

const { introspectionQuery } = require("graphql");
const prettier = require("prettier");
const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const writeFile = promisify(fs.writeFile);

const fetchIntrospection = async (fetch, endpoint) => {
  const fetchResult = await fetch(endpoint, {
    body: JSON.stringify({
      query: introspectionQuery,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return fetchResult.json();
};

const writeSchema = async (cwd, schema) =>
  writeFile(
    path.join(cwd, "schema.json"),
    prettier.format(JSON.stringify(schema), { parser: "json" }),
  );

const writeFragmentMatcher = (cwd, schema) => {
  // eslint-disable-next-line no-underscore-dangle
  const filteredTypes = schema.data.__schema.types.filter(
    ({ possibleTypes }) => possibleTypes !== null,
  );

  const fm = prettier.format(
    `
  const apolloCacheInmemory = require("apollo-cache-inmemory");

  const introspectionQueryResultData = {
    __schema: {
      types: ${JSON.stringify(filteredTypes)}
    }
  };

  const fragmentMatcher = new apolloCacheInmemory.IntrospectionFragmentMatcher({
    introspectionQueryResultData
  });

  module.exports.fragmentMatcher = fragmentMatcher;
  `,
    { parser: "babel" },
  );

  return writeFile(path.join(cwd, "fragment-matcher.js"), fm);
};

module.exports = async (cwd, fetch, endpoint) => {
  const schema = await fetchIntrospection(fetch, endpoint);

  return Promise.all([
    writeSchema(cwd, schema),
    writeFragmentMatcher(cwd, schema),
  ]);
};
