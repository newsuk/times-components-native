import TestRenderer from "react-test-renderer";
import React from "react";
import EmptySearchMessage from "@times-components-native/search/src/empty-search-message";
import CancelButton from "../src/search-bar/cancel-button";

export default () => {
  it("EmptySearchMessage", () => {
    const testInstance = TestRenderer.create(<EmptySearchMessage />);
    expect(testInstance).toMatchSnapshot();
  });

  describe("Search Bar", () => {
    it("CancelButton", () => {
      const testInstance = TestRenderer.create(
        <CancelButton onPress={() => null} />,
      );
      expect(testInstance).toMatchSnapshot();
    });
  });
};
