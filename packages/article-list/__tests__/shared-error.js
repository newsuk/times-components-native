import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalNativeTransform,
  print,
  replacePropTransform,
} from "@times-components-native/jest-serializer";
import { hash } from "@times-components-native/test-utils";
import { omitNative as omitProps } from "./utils";
import shared from "./shared-error.base";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform((value, key) => omitProps.has(key)),
      replacePropTransform((value, key) =>
        key === "source" ? hash(JSON.stringify(value)) : value,
      ),
    ),
  );

  shared();
};
