import React from "react";
import { iterator } from "@times-components-native/test-utils";
import { ContextProviderWithDefaults } from "@times-components-native/context";
import Label from "../src/article-label/article-label";
import Meta from "../src/article-meta/article-meta";
import Standfirst from "../src/article-standfirst/article-standfirst";

import { bylineWithLink } from "../fixtures/full-article";
import { withTabletContext } from "./shared.base";

const snapshotTests = (renderComponent) => [
  {
    name: "article standfirst with content",
    test() {
      const output = renderComponent(
        withTabletContext(<Standfirst standfirst="This is a standfirst" />),
      );

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "article standfirst with no content",
    test() {
      const output = renderComponent(withTabletContext(<Standfirst />));

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "article label uses default section colour",
    test() {
      const output = renderComponent(
        withTabletContext(
          <ContextProviderWithDefaults
            value={{
              theme: { sectionColour: null },
            }}
          >
            <Label label="Random Label" />
          </ContextProviderWithDefaults>,
        ),
      );

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "article label renders null if there is no text",
    test() {
      const output = renderComponent(withTabletContext(<Label />));

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "article label shows video label is isVideo is truthy",
    test() {
      const output = renderComponent(
        withTabletContext(<Label isVideo label="Random Label" />),
      );

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "article meta",
    test() {
      const output = renderComponent(
        withTabletContext(
          <Meta
            bylines={bylineWithLink()}
            onAuthorPress={() => null}
            publicationName="TIMES"
            publishedTime="2015-03-23T19:39:39.000Z"
          />,
        ),
      );

      expect(output).toMatchSnapshot();
    },
  },
];

export default (renderComponent, platformTests = []) => {
  const realIntl = Intl;

  beforeEach(() => {
    global.Intl = {
      DateTimeFormat: () => ({
        resolvedOptions: () => ({ timeZone: "Europe/London" }),
      }),
    };
  });

  afterEach(() => {
    global.Intl = realIntl;
  });

  iterator([...snapshotTests(renderComponent), ...platformTests]);
};
