import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@tcn/test-utils";
import "./mocks";
import Topic from "../src/topic";

jest.mock(
  "@tcn/provider",
  () => require("./mock-loading-provider") // eslint-disable-line global-require
);
jest.mock("@tcn/tracking", () => {
  const id = x => x;

  return {
    withTrackEvents: id,
    withTrackingContext: id
  };
});

export default props => {
  const tests = [
    {
      name: "an article list loading",
      test() {
        const testInstance = TestRenderer.create(
          <Topic {...props} isLoading />
        );

        expect(testInstance).toMatchSnapshot();
      }
    }
  ];

  jest.useFakeTimers();

  iterator(tests);
};
