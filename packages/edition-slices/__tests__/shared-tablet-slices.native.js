import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  minimaliseTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared-tablet-slices.base";

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
