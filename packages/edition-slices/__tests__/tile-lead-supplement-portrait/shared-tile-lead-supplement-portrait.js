import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  flattenStyleTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import shared from "./shared-tile-lead-supplement-portrait.base";

export default () => {
  addSerializers(
    expect,
    enzymeRenderedSerializer(),
    compose(print, minimalNativeTransform, flattenStyleTransform),
  );

  shared();
};
