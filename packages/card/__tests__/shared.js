import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import shared from "./shared.base";

jest.mock("@times-components-native/image", () => "Image");
jest.mock("@times-components-native/gradient", () => "Gradient");

export default () => {
  addSerializers(
    expect,
    enzymeRenderedSerializer(),
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform(
        (value, key) => key === "style" || key.includes("Class"),
      ),
    ),
  );

  shared(TestRenderer.create);
};
