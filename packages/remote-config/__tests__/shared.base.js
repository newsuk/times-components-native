import React from "react";
import TestRenderer from "react-test-renderer";
import {
  RemoteConfigContext,
  RemoteConfigProvider,
} from "../src/remote-config";

export default () => {
  it("with default values", () => {
    const testInstance = TestRenderer.create(
      <RemoteConfigProvider
        config={{
          commentsGloballyDisabled: false,
          variants: {},
        }}
      >
        <RemoteConfigContext.Consumer>
          {(context) => JSON.stringify(context)}
        </RemoteConfigContext.Consumer>
      </RemoteConfigProvider>,
    );

    expect(testInstance).toMatchSnapshot();
  });

  it("with commentsGloballyDisabled and articleMpuTestVariant A", () => {
    const testInstance = TestRenderer.create(
      <RemoteConfigProvider
        config={{
          commentsGloballyDisabled: true,
          variants: {
            testVariant: "A",
          },
        }}
      >
        <RemoteConfigContext.Consumer>
          {(context) => JSON.stringify(context)}
        </RemoteConfigContext.Consumer>
      </RemoteConfigProvider>,
    );

    expect(testInstance).toMatchSnapshot();
  });
};
