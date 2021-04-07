import TestRenderer from "react-test-renderer";
import React from "react";
import EmptySearchMessage from "../src/empty-search-message";
import CancelButton from "../src/search-bar/cancel-button";
import { SearchBarComponent } from "../src/search-bar/search-bar";

export default () => {
  it("EmptySearchMessage", () => {
    const testInstance = TestRenderer.create(<EmptySearchMessage />);
    expect(testInstance).toMatchSnapshot();
  });

  describe("Search Bar", () => {
    it("should render correctly", () => {
      const testInstance = TestRenderer.create(
        <SearchBarComponent
          isConnected={true}
          refine={() => null}
          isSearchStalled={false}
          currentRefinement={"test"}
        />,
      );
      expect(testInstance).toMatchSnapshot();
    });

    it("CancelButton", () => {
      const testInstance = TestRenderer.create(
        <CancelButton onPress={() => null} isConnected={true} />,
      );
      expect(testInstance).toMatchSnapshot();
    });
  });
};
