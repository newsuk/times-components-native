import React from "react";
import TestRenderer from "react-test-renderer";
import XButton from "../../src/searchBar/xButton";

describe("XButton", () => {
  it("Should render correctly", () => {
    const testInstance = TestRenderer.create(<XButton onPress={() => null} />);
    expect(testInstance).toMatchSnapshot();
  });
});
