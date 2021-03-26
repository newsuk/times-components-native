import TestRenderer from "react-test-renderer";
import Chevron from "@times-components-native/search/src/searchBar/chevron";
import React from "react";

describe("Chevron", () => {
  it("should render correctly", () => {
    const testInstance = TestRenderer.create(<Chevron onPress={() => null} />);
    expect(testInstance).toMatchSnapshot();
  });
});
