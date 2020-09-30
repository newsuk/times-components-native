import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components-native/test-utils";
import Search from "../src/search";

jest.mock("react-native-image-zoom-viewer", () => "ImageZoomView");

jest.mock("@times-components-native/tracking", () => {
  const id = (x) => x;

  return {
    withTrackEvents: id,
    withTrackingContext: id,
  };
});

export default (props) => {
  const tests = [
    {
      name: "a default state",
      test() {
        const testInstance = TestRenderer.create(<Search {...props} />);

        expect(testInstance).toMatchSnapshot();
      },
    },
    {
      name: "an article list",
      test() {
        const testInstance = TestRenderer.create(
          <Search {...props} initialQuery="politics" />,
        );

        expect(testInstance).toMatchSnapshot();
      },
    },
  ];

  jest.useFakeTimers();

  iterator(tests);
};
