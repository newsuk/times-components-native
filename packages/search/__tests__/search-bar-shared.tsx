import TestRenderer from "react-test-renderer";
import React from "react";
import EmptySearchMessage from "../src/empty-search-message";
import CancelButton from "../src/search-bar/cancel-button";
import { SearchBar } from "../src/search-bar/search-bar";

export default () => {
  it("EmptySearchMessage", () => {
    const testInstance = TestRenderer.create(<EmptySearchMessage />);
    expect(testInstance).toMatchSnapshot();
  });

  describe("Search Bar", () => {
    it("should render correctly", () => {
      const testInstance = TestRenderer.create(<SearchBar />);
      expect(testInstance).toMatchSnapshot();
    });

    it("CancelButton", () => {
      const testInstance = TestRenderer.create(
        <CancelButton onPress={() => null} />,
      );
      expect(testInstance).toMatchSnapshot();
    });
  });
};
