#!/usr/bin/env node
/* eslint-disable no-console */

const fetch = require("node-fetch");
const path = require("path");
const { promisify } = require("util");
const fs = require("fs");
const fetchGql = require("./fetch-gql-schema");

const access = promisify(fs.access);

async function main() {
  try {
    await fetchGql(
      fetch,

      process.env.GRAPHQL_ENDPOINT || "https://api.thetimes.co.uk/graphql",
    );
  } catch (e) {
    console.log(e);

    try {
      await access(path.join(process.cwd(), "schema.json"));
      console.log("Your schema may be out of date for linting");
    } catch (err) {
      console.log("Without a schema you cannot perform gql linting");
    }
  }

  process.exit();
}

main();
