import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared-with-style.base";

jest.mock("@tcn/image", () => "Image");
jest.mock("@tcn/gradient", () => "Gradient");

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      flattenStyleTransform,
      minimalNativeTransform
    )
  );

  shared(TestRenderer.create);
};
