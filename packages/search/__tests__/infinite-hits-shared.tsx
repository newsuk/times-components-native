import TestRenderer from "react-test-renderer";
import React from "react";
import SearchResults from "../src/search-results";

export default () => {
  describe("SearchResults", () => {
    it("should render correctly", () => {
      const testInstance = TestRenderer.create(
        <SearchResults onArticlePress={() => null} />,
      );

      expect(testInstance).toMatchSnapshot();
    });
  });
};
