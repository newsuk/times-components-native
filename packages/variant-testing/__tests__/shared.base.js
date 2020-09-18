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

  it("should create empty context if not tablet", () => {
    const testInstance = TestRenderer.create(
      <VariantTestingProvider
        variants={{ articleMpuTestVariant: "B" }}
        isTablet={false}
      >
        <VariantTestingContext.Consumer>
          {(context) => JSON.stringify(context)}
        </VariantTestingContext.Consumer>
      </VariantTestingProvider>,
    );

    expect(testInstance).toMatchSnapshot();
  });

  it("should create context based on variant prop", () => {
    const testInstance = TestRenderer.create(
      <VariantTestingProvider
        variants={{ articleMpuTestVariant: "B" }}
        isTablet={true}
      >
        <VariantTestingContext.Consumer>
          {(context) => JSON.stringify(context)}
        </VariantTestingContext.Consumer>
      </VariantTestingProvider>,
    );

    expect(testInstance).toMatchSnapshot();
  });

  it("articleMpuTestVariant should default to A if not set", () => {
    const testInstance = TestRenderer.create(
      <VariantTestingProvider variants={{}} isTablet={true}>
        <VariantTestingContext.Consumer>
          {(context) => JSON.stringify(context)}
        </VariantTestingContext.Consumer>
      </VariantTestingProvider>,
    );

    expect(testInstance).toMatchSnapshot();
  });

  it("articleMpuTestVariant should default to A if not recognised", () => {
    const testInstance = TestRenderer.create(
      <VariantTestingProvider
        variants={{ articleMpuTestVariant: "Z" }}
        isTablet={true}
      >
        <VariantTestingContext.Consumer>
          {(context) => JSON.stringify(context)}
        </VariantTestingContext.Consumer>
      </VariantTestingProvider>,
    );

    expect(testInstance).toMatchSnapshot();
  });
};
