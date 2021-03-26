import TestRenderer from "react-test-renderer";
import React from "react";
import SearchList from "../src/searchList/searchList";
import FormattedDate from "../src/searchList/formattedDate";
import SearchListItemByline from "../src/searchList/searchListItemByline";
import SearchListItemSnippet from "../src/searchList/searchListItemSnippet";

const mockHits = require("../__mocks__/mock-hits.json");

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
