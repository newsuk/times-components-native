/* eslint-disable react/no-multi-comp */

import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components-native/test-utils";
import ArticleMainStandard from "../src/article-main-standard";
import articleFixture, { testFixture } from "../fixtures/full-article";
import { adConfig } from "./ad-mock";
import articleProps from "./shared-article-props";
import { withMobileContext } from "@times-components-native/test-utils";

const emptyArticle = {
  bylines: null,
  expirableFlags: null,
  hasVideo: null,
  label: null,
  leadAsset: null,
  longRead: false,
  relatedArticleSlice: null,
  standfirst: null,
  topics: null,
};

export const snapshotTests = (renderComponent) => [
  {
    name: "an article",
    test() {
      const output = renderComponent(
        withMobileContext(
          <ArticleMainStandard
            {...articleProps}
            adConfig={adConfig}
            analyticsStream={() => null}
            article={articleFixture(testFixture)}
            onAuthorPress={() => null}
            onCommentGuidelinesPress={() => null}
            onCommentsPress={() => null}
            onLinkPress={() => null}
            onRelatedArticlePress={() => null}
            onTopicPress={() => null}
            onTwitterLinkPress={() => null}
            onVideoPress={() => null}
          />,
        ),
      );

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "loading",
    test() {
      const output = renderComponent(
        <ArticleMainStandard {...articleProps} isLoading />,
      );

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "an error",
    test() {
      const props = {
        error: { message: "An example error." },
      };

      const output = renderComponent(
        <ArticleMainStandard
          {...props}
          {...articleProps}
          adConfig={adConfig}
          analyticsStream={() => null}
          onAuthorPress={() => null}
          onCommentGuidelinesPress={() => null}
          onCommentsPress={() => null}
          onLinkPress={() => null}
          onRelatedArticlePress={() => null}
          onTopicPress={() => null}
          onTwitterLinkPress={() => null}
          onVideoPress={() => null}
        />,
      );

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "an article with no headline falls back to use shortHeadline",
    test() {
      const output = renderComponent(
        withMobileContext(
          <ArticleMainStandard
            {...articleProps}
            adConfig={adConfig}
            analyticsStream={() => null}
            article={articleFixture({
              ...testFixture,
              ...emptyArticle,
              headline: "",
            })}
            onAuthorPress={() => null}
            onCommentGuidelinesPress={() => null}
            onCommentsPress={() => null}
            onLinkPress={() => null}
            onRelatedArticlePress={() => null}
            onTopicPress={() => null}
            onTwitterLinkPress={() => null}
            onVideoPress={() => null}
          />,
        ),
      );

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "an article with ads",
    test() {
      const output = renderComponent(
        withMobileContext(
          <ArticleMainStandard
            {...articleProps}
            adConfig={adConfig}
            analyticsStream={() => null}
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
            onAuthorPress={() => null}
            onCommentGuidelinesPress={() => null}
            onCommentsPress={() => null}
            onLinkPress={() => null}
            onRelatedArticlePress={() => null}
            onTopicPress={() => null}
            onTwitterLinkPress={() => null}
            onVideoPress={() => null}
          />,
        ),
      );

      expect(output).toMatchSnapshot();
    },
  },
];

const negativeTests = [
  {
    name: "an article with no byline",
    test() {
      const output = TestRenderer.create(
        withMobileContext(
          <ArticleMainStandard
            {...articleProps}
            adConfig={adConfig}
            analyticsStream={() => null}
            article={articleFixture({ ...testFixture, bylines: null })}
            onAuthorPress={() => null}
            onCommentGuidelinesPress={() => null}
            onCommentsPress={() => null}
            onLinkPress={() => null}
            onRelatedArticlePress={() => null}
            onTopicPress={() => null}
            onTwitterLinkPress={() => null}
            onVideoPress={() => null}
          />,
        ),
      );

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "an article with no label",
    test() {
      const output = TestRenderer.create(
        withMobileContext(
          <ArticleMainStandard
            {...articleProps}
            adConfig={adConfig}
            analyticsStream={() => null}
            article={articleFixture({ ...testFixture, label: null })}
            onAuthorPress={() => null}
            onCommentGuidelinesPress={() => null}
            onCommentsPress={() => null}
            onLinkPress={() => null}
            onRelatedArticlePress={() => null}
            onTopicPress={() => null}
            onTwitterLinkPress={() => null}
            onVideoPress={() => null}
          />,
        ),
      );

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "an article with no standfirst",
    test() {
      const testInstance = TestRenderer.create(
        withMobileContext(
          <ArticleMainStandard
            {...articleProps}
            adConfig={adConfig}
            analyticsStream={() => null}
            article={articleFixture({
              ...testFixture,
              standfirst: null,
            })}
            onAuthorPress={() => null}
            onCommentGuidelinesPress={() => null}
            onCommentsPress={() => null}
            onLinkPress={() => null}
            onRelatedArticlePress={() => null}
            onTopicPress={() => null}
            onTwitterLinkPress={() => null}
            onVideoPress={() => null}
          />,
        ),
      );

      const textNodes = testInstance.root.findAll((node) => {
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
