import React from "react";
import { FlatList } from "react-native";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components-native/test-utils";
import ArticleList from "../src/article-list";
import articlesFixture from "../fixtures/articles.json";

export default (additionalTests = []) => {
  const realIntl = Intl;

  beforeEach(() => {
    global.Intl = {
      DateTimeFormat: () => ({
        resolvedOptions: () => ({ timeZone: "Europe/London" }),
      }),
    };
    jest.useFakeTimers();
  });

  afterEach(() => {
    global.Intl = realIntl;
  });

  const tests = [
    {
      name: "article list",
      test() {
        const testInstance = TestRenderer.create(
          <ArticleList
            articles={articlesFixture.slice(0, 2)}
            emptyStateMessage="Empty state"
            onArticlePress={() => null}
            pageSize={3}
            refetch={() => null}
          />,
        );

        expect(testInstance).toMatchSnapshot();
      },
    },
    {
      name: "article list with no images",
      test() {
        const testInstance = TestRenderer.create(
          <ArticleList
            articles={articlesFixture.slice(0, 1)}
            emptyStateMessage="Empty state"
            onArticlePress={() => null}
            pageSize={3}
            refetch={() => null}
            showImages={false}
          />,
        );

        expect(testInstance).toMatchSnapshot();
      },
    },
    {
      name: "a retry button when load more fails",
      async test() {
        const fetchMore = () => Promise.reject(new Error("test"));

        const testInstance = TestRenderer.create(
          <ArticleList
            articles={articlesFixture.slice(0, 1)}
            emptyStateMessage="Empty state"
            fetchMore={fetchMore}
            onArticlePress={() => null}
            refetch={() => null}
          />,
        );

        try {
          await testInstance.root.findByType(FlatList).props.onEndReached();
        } catch (err) {
          expect(testInstance.toJSON()).toMatchSnapshot();
        }
      },
    },
  ];

  iterator([...tests, ...additionalTests]);
};
