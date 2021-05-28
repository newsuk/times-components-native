import TestRenderer from "react-test-renderer";
import React from "react";
import SearchResults from "../src/search-results";

jest.mock("react-native", () => {
  const rn = jest.requireActual("react-native");
  rn.NativeModules.ReactAnalytics = { track: jest.fn() };
  return rn;
});

export default () => {
  describe("SearchResults", () => {
    it("should render correctly", () => {
      const testInstance = TestRenderer.create(
        <SearchResults onArticlePress={() => null} isConnected={true} />,
      );

      expect(testInstance).toMatchSnapshot();
    });
  });
};
