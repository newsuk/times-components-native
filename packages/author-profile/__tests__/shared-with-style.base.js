import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@tcn/test-utils";
import "./mocks";
import AuthorProfile from "../src/author-profile";

jest.mock("@tcn/provider", () =>
  // eslint-disable-next-line global-require
  require("./mock-provider")
);
jest.mock("@tcn/tracking", () => {
  const id = x => x;

  return {
    withTrackEvents: id,
    withTrackingContext: id
  };
});

export default (props, platformTests = []) => {
  const tests = [
    {
      name: "an article list header",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile {...props} isLoading={false} page={2} />
        );

        const articleList = testInstance.root.find(
          node => node.type === "ArticleList"
        );

        const articleListHeader = TestRenderer.create(
          articleList.props.articleListHeader
        );

        expect(articleListHeader).toMatchSnapshot();
      }
    },
    {
      name: "an article list header loading",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile {...props} isLoading />
        );

        const articleList = testInstance.root.find(
          node => node.type === "ArticleList"
        );

        const articleListHeader = TestRenderer.create(
          articleList.props.articleListHeader
        );

        expect(articleListHeader).toMatchSnapshot();
      }
    },
    ...platformTests
  ];

  jest.useFakeTimers();

  iterator(tests);
};
