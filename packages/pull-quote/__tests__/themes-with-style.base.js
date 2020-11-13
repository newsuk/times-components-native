import React from "react";
import TestRenderer from "react-test-renderer";

import { useAppContext } from "@times-components-native/context";
import { themeFactory } from "@times-components-native/styleguide";
import PullQuotes from "../src/pull-quote";

jest.mock("@times-components-native/context");

const content = "Some content";
const caption = "A caption";
const text = "Some extra text";

export default [
  {
    name: "pull quote in culture magazine",
    test: () => {
      const theme = themeFactory("culture", "magazinestandard");
      useAppContext.mockImplementation(() => ({
        theme: { pullQuoteFont: theme.pullQuoteFont },
      }));
      const testInstance = TestRenderer.create(
        <PullQuotes
          caption={caption}
          onTwitterLinkPress={() => null}
          text={text}
        >
          {content}
        </PullQuotes>,
      );
      expect(testInstance).toMatchSnapshot();
    },
  },
  {
    name: "pull quote in style magazine",
    test: async () => {
      const theme = themeFactory("style", "magazinestandard");
      useAppContext.mockImplementation(() => ({
        theme: { pullQuoteFont: theme.pullQuoteFont },
      }));
      const testInstance = TestRenderer.create(
        <PullQuotes
          caption={caption}
          onTwitterLinkPress={() => null}
          text={text}
        >
          {content}
        </PullQuotes>,
      );
      expect(testInstance).toMatchSnapshot();
    },
  },
  {
    name: "pull quote in the sunday times magazine",
    test: async () => {
      const theme = themeFactory("thesundaytimesmagazine", "magazinestandard");
      useAppContext.mockImplementation(() => ({
        theme: { pullQuoteFont: theme.pullQuoteFont },
      }));
      const testInstance = TestRenderer.create(
        <PullQuotes
          caption={caption}
          onTwitterLinkPress={() => null}
          text={text}
        >
          {content}
        </PullQuotes>,
      );
      expect(testInstance).toMatchSnapshot();
    },
  },
];
