import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components-native/test-utils";
import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import "./mocks";
import ArticleExtrasContent from "../src/article-extras-content";
import ArticleExtrasError from "../src/article-extras-error";
import { relatedArticleSlice, topics } from "../fixtures/article-extras";
import { ResponsiveContext } from "@times-components-native/responsive";

const withTabletContext = (WrappedComponent) => (
  <ResponsiveContext.Provider value={{ isTablet: true }}>
    {WrappedComponent}
  </ResponsiveContext.Provider>
);

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform(
        (value, key) =>
          key === "style" ||
          key === "testID" ||
          key === "topics" ||
          key === "slice",
      ),
    ),
  );

  const tests = [
    {
      name: "article extras content",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleExtrasContent
            analyticsStream={() => null}
            article={{
              commentCount: 123,
              commentsEnabled: true,
              relatedArticleSlice,
              topics,
            }}
            articleId="dummy-article-id"
            articleUrl="dummy-article-url"
            onCommentGuidelinesPress={() => null}
            onCommentsPress={() => null}
            onRelatedArticlePress={() => null}
            onTopicPress={() => null}
          />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article extras content on tablet",
      test: () => {
        const testInstance = TestRenderer.create(
          withTabletContext(
            <ArticleExtrasContent
              analyticsStream={() => null}
              article={{
                commentCount: 123,
                commentsEnabled: true,
                relatedArticleSlice,
                topics,
              }}
              articleId="dummy-article-id"
              articleUrl="dummy-article-url"
              onCommentGuidelinesPress={() => null}
              onCommentsPress={() => null}
              onRelatedArticlePress={() => null}
              onTopicPress={() => null}
            />,
          ),
        );
        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "article extras error",
      test: () => {
        const testInstance = TestRenderer.create(
          <ArticleExtrasError refetch={() => null} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
