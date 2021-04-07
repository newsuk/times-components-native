import React from "react";
import TestRenderer from "react-test-renderer";
import Magnifier from "../../src/search-bar/magnifier";

describe("Magnifier", () => {
  it("Should render correctly", () => {
    const testInstance = TestRenderer.create(<Magnifier />);
    expect(testInstance).toMatchSnapshot();
  });
});
