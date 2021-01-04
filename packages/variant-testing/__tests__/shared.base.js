import React from "react";
import TestRenderer from "react-test-renderer";
import {
  VariantTestingContext,
  VariantTestingProvider,
} from "../src/variant-testing";

export default () => {
  it("with default values", () => {
    const testInstance = TestRenderer.create(
      <VariantTestingProvider>
        <VariantTestingContext.Consumer>
          {(context) => JSON.stringify(context)}
        </VariantTestingContext.Consumer>
      </VariantTestingProvider>,
    );

    expect(testInstance).toMatchSnapshot();
  });
};
