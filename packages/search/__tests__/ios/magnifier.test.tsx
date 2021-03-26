import React from "react";
import TestRenderer from "react-test-renderer";
import Magnifier from "../../src/searchBar/magnifier";

describe("Magnifier", () => {
  it("Should render correctly", () => {
    const testInstance = TestRenderer.create(<Magnifier />);
    expect(testInstance).toMatchSnapshot();
  });
});
