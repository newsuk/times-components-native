import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  flattenStyleTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared-tile-f.base";

export default () => {
  addSerializers(
    expect,
    enzymeRenderedSerializer(),
    compose(
      print,
      minimalNativeTransform,
      flattenStyleTransform
    )
  );

  shared();
};
