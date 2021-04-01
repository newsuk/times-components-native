import TestRenderer from "react-test-renderer";
import Magnifier from "@times-components-native/search/src/search-bar/magnifier";
import React from "react";

describe("CancelButton", () => {
  it("should render correctly", () => {
    const testInstance = TestRenderer.create(<Magnifier />);
    expect(testInstance).toMatchSnapshot();
  });
});
