import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components-native/test-utils";
import ArticleListPageError from "../src/article-list-page-error";
import ArticleList from "../src/article-list";
import articlesFixture from "../fixtures/articles.json";

jest.mock("@times-components-native/button", () => "Button");
jest.mock("../src/article-list-item", () => ({ article }) => {
  if (article && article.id === "4e6894ec-cb18-11e7-b529-95e3fc05f40f") {
    throw new Error("test");
  }

  return "ArticleListItem";
});

export default () => {
  const tests = [
    {
      name: "page error",
      test() {
        const testInstance = TestRenderer.create(
          <ArticleListPageError refetch={() => null} />,
        );

        expect(testInstance).toMatchSnapshot();
      },
    },
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
  ];

  iterator(tests);
};
