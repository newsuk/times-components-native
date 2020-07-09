import React from "react";
import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  minimaliseTransform,
  minimalNativeTransform,
  print,
  replacePropTransform
} from "@tcn/jest-serializer";
import { hash, iterator } from "@tcn/test-utils";
import Video from "../src/video";
import defaultVideoProps from "./default-video-props";

jest.mock("@tcn/image", () => "Image");
// eslint-disable-next-line global-require
jest.mock("@tcn/svgs", () => require("./mock-svg"));

export default () => {
  addSerializers(
    expect,
    enzymeRenderedSerializer(),
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform(
        (value, key) =>
          key === "style" ||
          key === "nativeBackgroundAndroid" ||
          key.includes("Class")
      ),
      replacePropTransform((value, key) => {
        if (key === "uri") {
          return hash(value);
        }
        if (key === "source" && value.uri) {
          return hash(value.uri);
        }
        return value;
      })
    )
  );

  const tests = [
    {
      name: "video",
      test: () => {
        const testInstance = TestRenderer.create(
          <Video {...defaultVideoProps} />
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      }
    },
    {
      name: "video without a poster image",
      test: () => {
        const testInstance = TestRenderer.create(
          <Video {...defaultVideoProps} poster={null} />
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      }
    },
    {
      name: "360 video",
      test: () => {
        const testInstance = TestRenderer.create(
          <Video {...defaultVideoProps} playerId="foo" />
        );

        expect(testInstance).toMatchSnapshot();
      }
    }
  ];

  iterator(tests);
};
