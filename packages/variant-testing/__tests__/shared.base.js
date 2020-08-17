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

  it("should create context based on variant prop", () => {
    const testInstance = TestRenderer.create(
      <VariantTestingProvider variants={{ articleMpuTestVariant: "B" }}>
        <VariantTestingContext.Consumer>
          {(context) => JSON.stringify(context)}
        </VariantTestingContext.Consumer>
      </VariantTestingProvider>,
    );

    expect(testInstance).toMatchSnapshot();
  });
};
