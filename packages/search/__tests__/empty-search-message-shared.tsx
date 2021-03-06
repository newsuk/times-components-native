import TestRenderer from "react-test-renderer";
import React from "react";
import EmptySearchMessage from "../src/empty-search-message";

export default () => {
  describe("EmptySearchMessage", () => {
    it("should render correctly", () => {
      const testInstance = TestRenderer.create(<EmptySearchMessage />);
      expect(testInstance).toMatchSnapshot();
    });
  });
};
