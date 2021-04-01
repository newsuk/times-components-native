import React from "react";
import TestRenderer from "react-test-renderer";
import XButton from "../../src/search-bar/x-button";

describe("XButton", () => {
  it("Should render correctly", () => {
    const testInstance = TestRenderer.create(<XButton onPress={() => null} />);
    expect(testInstance).toMatchSnapshot();
  });
});
