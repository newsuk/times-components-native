import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  flattenStyleTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared-tile-ac.base";

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
