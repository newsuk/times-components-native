import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  minimaliseTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared-slices.base";

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
        (value, key) =>
          key === "style" || key.includes("Class") || key === "tile"
      )
    )
  );

  shared();
};
