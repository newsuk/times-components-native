import React from "react";
import { AppRegistry } from "react-native-web";
import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalWebTransform,
  replacePropTransform,
  rnwTransform,
  stylePrinter
} from "@times-components-native/jest-serializer";
import { hash, iterator } from "@times-components-native/test-utils";
import IsPaidSubscriber from "../../src/is-paid-subscriber";
import Video from "../../src/video";
import defaultVideoProps from "../default-video-props";

jest.mock("@times-components-native/image", () => "Image");
jest.mock("@times-components-native/icons", () => ({
  IconVideo360Player: "IconVideo360Player"
}));

const omitProps = new Set(["className", "controls", "id", "style"]);

addSerializers(
  expect,
  compose(
    stylePrinter,
    minimaliseTransform((value, key) => omitProps.has(key)),
    minimalWebTransform,
    replacePropTransform(
      (value, key) => (key === "uri" || key === "poster" ? hash(value) : value)
    ),
    rnwTransform(AppRegistry)
  )
);

const tests = [
  {
    name: "video with data attributes",
    test: () => {
      const testInstance = TestRenderer.create(
        <IsPaidSubscriber.Provider value>
          <Video {...defaultVideoProps} poster={null} />
        </IsPaidSubscriber.Provider>
      );

      expect(testInstance.toJSON()).toMatchSnapshot();
    }
  },
  {
    name: "360 video with data attributes",
    test: () => {
      const testInstance = TestRenderer.create(
        <IsPaidSubscriber.Provider value>
          <Video {...defaultVideoProps} poster={null} is360 />
        </IsPaidSubscriber.Provider>
      );

      expect(testInstance.toJSON()).toMatchSnapshot();
    }
  }
];

iterator(tests);
