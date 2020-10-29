import "../mocks-tiles";
import TestRenderer from "react-test-renderer";
import React from "react";
import SectionAd from "@times-components-native/edition-slices";

export default () => {
  describe("SectionAd", () => {
    it("renders correctly", () => {
      const output = TestRenderer.create(<SectionAd />);
      expect(output).toMatchSnapshot();
    });
  });
};
