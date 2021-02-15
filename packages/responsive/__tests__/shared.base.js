import React from "react";
import TestRenderer from "react-test-renderer";
import Responsive, { ResponsiveContext } from "../src/responsive";
import { calculateResponsiveContext } from "../src/calculateResponsiveContext";

export default () => {
  it("with default values", () => {
    const testInstance = TestRenderer.create(
      <Responsive>
        <ResponsiveContext.Consumer>
          {(context) => JSON.stringify(context)}
        </ResponsiveContext.Consumer>
      </Responsive>,
    );

    expect(testInstance).toMatchSnapshot();
  });

  it("with specified values", () => {
    const testInstance = TestRenderer.create(
      <Responsive fontScale={1} displayHeight={1000} displayWidth={400}>
        <ResponsiveContext.Consumer>
          {(context) => JSON.stringify(context)}
        </ResponsiveContext.Consumer>
      </Responsive>,
    );

    expect(testInstance).toMatchSnapshot();
  });

  it("calculates section content height on tablet", () => {
    const { sectionContentHeightTablet } = calculateResponsiveContext(
      500,
      1000,
      1,
    );

    //  1000 (screen height)
    // -  10 (bottom inset)
    // -   5 (top inset)
    // - 200 (approximate nav height)
    // _____
    //   785
    expect(sectionContentHeightTablet).toEqual(785);
  });
};
