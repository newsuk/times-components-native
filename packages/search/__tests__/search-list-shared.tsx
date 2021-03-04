import TestRenderer from "react-test-renderer";
import React from "react";
import SearchList from "@times-components-native/search/src/search-list/search-list";
import FormattedDate from "@times-components-native/search/src/search-list/formatted-date";
import SearchListItemByline from "@times-components-native/search/src/search-list/search-list-item-byline";

const mockHits = require("./mock-hits.json");

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

  it("SearchListItemByline should render correctly", () => {
    const testInstance = TestRenderer.create(
      <SearchListItemByline byline={mockHits[0].byline} />,
    );

    expect(testInstance).toMatchSnapshot();
  });
};
