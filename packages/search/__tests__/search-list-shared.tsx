import TestRenderer from "react-test-renderer";
import React from "react";
import SearchList from "../src/search-list/search-list";
import FormattedDate from "../src/search-list/formatted-date";
import SearchListItemByLine from "../src/search-list/search-list-item-by-line";
import SearchListItemSnippet from "../src/search-list/search-list-item-snippet";

const mockHits = require("../__mocks__/mock-hits.json");

jest.mock("react-native", () => {
  const rn = jest.requireActual("react-native");
  rn.NativeModules.ReactAnalytics = { track: jest.fn() };
  return rn;
});

export default () => {
  describe("Search Bar List", () => {
    it("SearchList should render correctly", () => {
      const testInstance = TestRenderer.create(
        <SearchList
          fetchMore={() => null}
          hits={mockHits}
          onArticlePress={() => null}
        />,
      );

      expect(testInstance).toMatchSnapshot();
    });

    it("FormattedDate should render correctly", () => {
      const testInstance = TestRenderer.create(
        <FormattedDate
          publishedTime="2020-09-07T23:01:00.000Z"
          publicationName="times"
        />,
      );
      expect(testInstance).toMatchSnapshot();
    });
  });

  it("SearchListItemByLine should render correctly", () => {
    const testInstance = TestRenderer.create(
      <SearchListItemByLine byline={mockHits[0].byline} />,
    );

    expect(testInstance).toMatchSnapshot();
  });

  it("SearchListItemSnippet should render correctly", () => {
    const testInstance = TestRenderer.create(
      <SearchListItemSnippet
        hit={mockHits[0]}
        attribute="content"
        key={mockHits[0].url}
      />,
    );

    expect(testInstance).toMatchSnapshot();
  });
};
