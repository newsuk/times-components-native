import { iterator } from "@times-components-native/test-utils";
import hasAuthorData from "../src/has-author-data";

export default () => {
  const tests = [
    {
      name: "returns false if bylines is null",
      test: () => {
        const bylines = null;

        expect(hasAuthorData(bylines)).toBeFalsy();
      },
    },
    {
      name: "returns false if bylines array is empty",
      test: () => {
        const bylines = [];

        expect(hasAuthorData(bylines)).toBeFalsy();
      },
    },
    {
      name: "returns false if first byline is null",
      test: () => {
        const bylines = [
          {
            byline: null,
          },
        ];

        expect(hasAuthorData(bylines)).toBeFalsy();
      },
    },
    {
      name: "returns false if first byline array is empty",
      test: () => {
        const bylines = [
          {
            byline: [],
          },
        ];

        expect(hasAuthorData(bylines)).toBeFalsy();
      },
    },
    {
      name: "returns false if first byline name is not author",
      test: () => {
        const bylines = [
          {
            byline: [
              {
                name: "bar",
              },
            ],
          },
        ];

        expect(hasAuthorData(bylines));
      },
    },
    {
      name: "returns true if first byline has name of author",
      test: () => {
        const bylines = [
          {
            byline: [
              {
                name: "author",
              },
            ],
          },
        ];

        expect(hasAuthorData(bylines));
      },
    },
  ];

  iterator(tests);
};
