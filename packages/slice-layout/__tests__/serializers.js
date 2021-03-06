import {
  addSerializers,
  compose,
  minimalNativeTransform,
  minimaliseTransform,
  print,
} from "@times-components-native/jest-serializer";

addSerializers(
  expect,
  compose(
    print,
    minimalNativeTransform,
    minimaliseTransform((value, key) => key === "style"),
  ),
);
