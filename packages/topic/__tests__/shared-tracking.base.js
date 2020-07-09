import React from "react";
import TestRenderer from "react-test-renderer";
import { mockNativeModules } from "@tcn/mocks";
import { iterator } from "@tcn/test-utils";
import mockDate from "mockdate";
import "./mocks";
import Topic from "../src/topic";

mockNativeModules();
jest.mock("@tcn/provider", () =>
  // eslint-disable-next-line global-require
  require("./mock-provider")
);

export default props => {
  const tests = [
    {
      name: "tracking information",
      test() {
        const analyticsStream = jest.fn();

        TestRenderer.create(
          <Topic
            {...props}
            analyticsStream={analyticsStream}
            isLoading={false}
            page={2}
          />
        );

        expect(analyticsStream.mock.calls).toMatchSnapshot();
      }
    }
  ];

  jest.useFakeTimers();

  beforeEach(() => {
    mockDate.set(1514764800000, 0);
  });

  afterEach(() => {
    mockDate.reset();
  });

  iterator(tests);
};
