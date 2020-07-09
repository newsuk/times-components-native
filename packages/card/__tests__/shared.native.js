import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  minimaliseTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared.base";

jest.mock("@tcn/image", () => "Image");
jest.mock("@tcn/gradient", () => "Gradient");

export default () => {
  addSerializers(
    expect,
    enzymeRenderedSerializer(),
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform(
        (value, key) => key === "style" || key.includes("Class")
      )
    )
  );

  shared(TestRenderer.create);
};
