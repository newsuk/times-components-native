import React from "react";
import { ContextProviderWithDefaults } from "@times-components-native/context";
import { scales } from "@times-components-native/styleguide";
import ArticleSkeleton from "../src/article-skeleton";
import articleFixture, { testFixture } from "../fixtures/full-article";
import { adConfig } from "./ad-mock";
import articleSkeletonProps from "./shared-article-skeleton-props";

export default (renderComponent) => [
  {
    name: "scaled medium full article",
    test: () => {
      const output = renderComponent(
        <ContextProviderWithDefaults
          value={{ theme: { scale: scales.medium } }}
        >
          <ArticleSkeleton
            {...articleSkeletonProps}
            adConfig={adConfig}
            analyticsStream={() => null}
            data={articleFixture({
              ...testFixture,
            })}
            onAuthorPress={() => null}
            onCommentGuidelinesPress={() => null}
            onCommentsPress={() => null}
            onLinkPress={() => null}
            onRelatedArticlePress={() => null}
            onTopicPress={() => null}
            onTwitterLinkPress={() => null}
            onVideoPress={() => null}
          />
        </ContextProviderWithDefaults>,
      );

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "scaled large full article",
    test: () => {
      const output = renderComponent(
        <ContextProviderWithDefaults value={{ theme: { scale: scales.large } }}>
          <ArticleSkeleton
            {...articleSkeletonProps}
            adConfig={adConfig}
            analyticsStream={() => null}
            data={articleFixture({
              ...testFixture,
            })}
            onAuthorPress={() => null}
            onCommentGuidelinesPress={() => null}
            onCommentsPress={() => null}
            onLinkPress={() => null}
            onRelatedArticlePress={() => null}
            onTopicPress={() => null}
            onTwitterLinkPress={() => null}
            onVideoPress={() => null}
          />
        </ContextProviderWithDefaults>,
      );

      expect(output).toMatchSnapshot();
    },
  },
  {
    name: "scaled xlarge full article",
    test: () => {
      const output = renderComponent(
        <ContextProviderWithDefaults
          value={{ theme: { scale: scales.xlarge } }}
        >
          <ArticleSkeleton
            {...articleSkeletonProps}
            adConfig={adConfig}
            analyticsStream={() => null}
            data={articleFixture({
              ...testFixture,
            })}
            onAuthorPress={() => null}
            onCommentGuidelinesPress={() => null}
            onCommentsPress={() => null}
            onLinkPress={() => null}
            onRelatedArticlePress={() => null}
            onTopicPress={() => null}
            onTwitterLinkPress={() => null}
            onVideoPress={() => null}
          />
        </ContextProviderWithDefaults>,
      );

      expect(output).toMatchSnapshot();
    },
  },
];
