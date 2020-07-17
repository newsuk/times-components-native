import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import shared from "./shared-with-style.base";

export default () => {
  addSerializers(
    expect,
    compose(print, flattenStyleTransform, minimalNativeTransform),
  );

  shared();
};
