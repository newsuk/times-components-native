import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";

var stylePropTest = /style$/i;

addSerializers(
  expect,
  compose(
    print,
    minimalNativeTransform,
    minimaliseTransform((value, key) => stylePropTest.test(key)),
    flattenStyleTransform,
  ),
);
