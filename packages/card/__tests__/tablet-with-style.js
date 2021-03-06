import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import shared from "./tablet-with-style.base";

jest.mock("@times-components-native/image", () => "Image");
jest.mock("@times-components-native/gradient", () => "Gradient");

export default () => {
  addSerializers(
    expect,
    compose(print, flattenStyleTransform, minimalNativeTransform),
  );

  shared(TestRenderer.create);
};
