import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import shared from "./shared-with-style.base";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      flattenStyleTransform,
      minimaliseTransform((value, key) => key === "testID"),
      minimalNativeTransform,
    ),
  );

  shared();
};
