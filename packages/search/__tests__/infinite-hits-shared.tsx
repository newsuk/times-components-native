import TestRenderer from "react-test-renderer";
import React from "react";
import InfiniteHits from "../src/infiniteHits";

export default () => {
  describe("InfiniteHits", () => {
    it("should render correctly", () => {
      const testInstance = TestRenderer.create(
        <InfiniteHits onArticlePress={() => null} />,
      );

      expect(testInstance).toMatchSnapshot();
    });
  });
};
