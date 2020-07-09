import {
  addSerializers,
  compose,
  minimalNativeTransform,
  minimaliseTransform,
  print
} from "@tcn/jest-serializer";

import shared from "./shared.base";

const omitProps = new Set([
  "nativeBackgroundAndroid",
  "pointerEvents",
  "style"
]);

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform((value, key) => omitProps.has(key))
    )
  );

  shared();
};
