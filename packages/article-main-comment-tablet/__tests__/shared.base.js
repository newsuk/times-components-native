/* eslint-disable react/no-multi-comp */
import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components-native/test-utils";
import { ResponsiveContext } from "@times-components-native/responsive";
import ArticleMainCommentTablet from "../src/article-main-comment-tablet";
import articleFixture, { testFixture } from "../fixtures/full-article";
import sharedProps from "./shared-props";
import { adConfig } from "./ad-mock";

const findComponents = (testInstance, componentName) =>
  testInstance.root.findAll((node) => {
    if (typeof node.type === "string") {
      return node.type.includes(componentName);
    }

    return false;
  });

const emptyArticle = {
  expirableFlags: [],
  label: null,
  standfirst: null,
};

export const withTabletContext = (WrappedComponent) => (
  <ResponsiveContext.Provider
    value={{
      isTablet: true,
      narrowArticleBreakpoint: {
        container: 800,
        content: 600,
      },
    }}
  >
    {WrappedComponent}
  </ResponsiveContext.Provider>
);

export const snapshotTests = (renderComponent) => [
  {
    name: "an error",
    test() {
      const testRenderer = renderComponent(
        withTabletContext(
          <ArticleMainCommentTablet
            {...sharedProps}
            error={{ message: "An example error." }}
          />,
        ),
      );

      expect(testRenderer).toMatchSnapshot();
    },
  },
  {
    name: "loading",
    test() {
      const testRenderer = renderComponent(
        withTabletContext(
          <ArticleMainCommentTablet {...sharedProps} isLoading />,
        ),
      );

      expect(testRenderer).toMatchSnapshot();
    },
  },
  {
    name: "an article with no headline falls back to use shortHeadline",
    test() {
      const testRenderer = renderComponent(
        withTabletContext(
          <ArticleMainCommentTablet
            {...sharedProps}
            article={articleFixture({
              ...testFixture,
              ...emptyArticle,
              headline: "",
            })}
          />,
        ),
      );

      expect(testRenderer).toMatchSnapshot();
    },
  },
  {
    name: "an article with ads",
    test() {
      const testRenderer = renderComponent(
        withTabletContext(
          <ArticleMainCommentTablet
            {...sharedProps}
            article={articleFixture({
              ...testFixture,
              ...emptyArticle,
              content: [
                {
                  attributes: {},
                  children: [],
                  name: "ad",
                },
              ],
            })}
          />,
        ),
      );

      expect(testRenderer).toMatchSnapshot();
    },
  },
];

const negativeTests = [
  {
    name: "an article with no label",
    test() {
      const testRenderer = TestRenderer.create(
        withTabletContext(
          <ArticleMainCommentTablet
            {...sharedProps}
            article={articleFixture({ ...testFixture, label: null })}
          />,
        ),
      );

      const label = findComponents(testRenderer, "ArticleLabel");

      expect(label).toEqual([]);
    },
  },
  {
    name: "an article with no standfirst",
    test() {
      const testRenderer = TestRenderer.create(
        withTabletContext(
          <ArticleMainCommentTablet
            {...sharedProps}
            article={articleFixture({
              ...testFixture,
              standfirst: null,
            })}
          />,
        ),
      );

      const textNodes = testRenderer.root.findAll((node) => {
        if (typeof node.type === "string") {
          return (
            node.type === "Text" &&
            typeof node.props.children === "string" &&
            node.props.children === "Some Standfirst"
          );
        }

        return false;
      });

      expect(textNodes).toEqual([]);
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

  iterator([
    ...snapshotTests(renderComponent),
    ...platformTests,
    ...negativeTests,
  ]);
};

export { adConfig };
