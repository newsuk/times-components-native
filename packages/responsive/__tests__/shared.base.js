import React from "react";
import TestRenderer from "react-test-renderer";
import Responsive, { ResponsiveContext } from "../src/responsive";

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
      <Responsive fontScale={1} displayHeight={100} displayWidth={200}>
        <ResponsiveContext.Consumer>
          {(context) => JSON.stringify(context)}
        </ResponsiveContext.Consumer>
      </Responsive>,
    );

    expect(testInstance).toMatchSnapshot();
  });
};
