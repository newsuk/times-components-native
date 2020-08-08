const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const rimraf = require("rimraf");

import fetchGql from "../fetch-gql-schema";

const mkdir = promisify(fs.mkdir);
const rmdir = promisify(rimraf);
const readFile = promisify(fs.readFile);

const TEMP_DIR = path.join(__dirname, "tempSchema");

const mockSchema = {
  data: {
    __schema: {
      queryType: { name: "Query" },
      mutationType: { name: "Mutation" },
      subscriptionType: null,
      types: [
        {
          kind: "OBJECT",
          name: "Query",
          description: "",
          fields: [
            {
              name: "author",
              description: "A list of authors",
              args: [],
              type: { kind: "OBJECT", name: "Author", ofType: null },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          name: "leadAsset",
          description: "",
          args: [],
          type: { kind: "UNION", name: "Media", ofType: null },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          kind: "UNION",
          name: "Media",
          description: "",
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: null,
          possibleTypes: [
            { kind: "OBJECT", name: "Image", ofType: null },
            { kind: "OBJECT", name: "Video", ofType: null },
          ],
        },
      ],
      directives: [],
    },
  },
};

describe("fetch gql schema should", () => {
  beforeEach(async () => {
    await rmdir(TEMP_DIR);
    mkdir(TEMP_DIR);
  });

  afterAll(async () => {
    await rmdir(TEMP_DIR);
  });

  it("make the correct introspection query", async () => {
    const mockFetch = jest.fn().mockReturnValueOnce(
      Promise.resolve({
        json() {
          return Promise.resolve(mockSchema);
        },
      }),
    );
    const mockEndpoint = "https://graphql.io/graphql";

    await fetchGql(mockFetch, mockEndpoint, TEMP_DIR);

    const [firstCall] = mockFetch.mock.calls;
    const [, query] = firstCall;

    expect(query).toMatchSnapshot();
  });

  it("write the expected fragment matcher", async () => {
    const mockFetch = jest.fn().mockReturnValueOnce(
      Promise.resolve({
        json() {
          return Promise.resolve(mockSchema);
        },
      }),
    );
    const mockEndpoint = "https://graphql.io/graphql";

    await fetchGql(mockFetch, mockEndpoint, TEMP_DIR);

    const fragmentMatcher = await readFile(
      path.join(TEMP_DIR, "fragment-matcher.js"),
      "utf8",
    );

    expect(fragmentMatcher).toMatchSnapshot();
  });

  it("make an introspection query for the given GraphQL endpoint", async () => {
    const mockFetch = jest.fn().mockReturnValueOnce(
      Promise.resolve({
        json() {
          return Promise.resolve(mockSchema);
        },
      }),
    );
    const mockEndpoint = "https://graphql.io/graphql";

    await fetchGql(mockFetch, mockEndpoint, TEMP_DIR);

    const [firstCall] = mockFetch.mock.calls;
    const [endpoint] = firstCall;

    expect(endpoint).toEqual(mockEndpoint);
  });

  it("write the expected schema", async () => {
    const mockFetch = jest.fn().mockReturnValueOnce(
      Promise.resolve({
        json() {
          return Promise.resolve(mockSchema);
        },
      }),
    );
    const mockEndpoint = "https://graphql.io/graphql";

    await fetchGql(mockFetch, mockEndpoint, TEMP_DIR);

    const writtenSchema = await readFile(
      path.join(TEMP_DIR, "schema.json"),
      "utf8",
    );

    expect(JSON.parse(writtenSchema)).toEqual(mockSchema);
  });
});
