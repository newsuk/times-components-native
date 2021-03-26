import TestRenderer from "react-test-renderer";
import React from "react";
import EmptySearchMessage from "../src/emptySearchMessage";
import CancelButton from "../src/searchBar/cancelButton";
import { SearchBar } from "../src/searchBar/searchBar";

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
