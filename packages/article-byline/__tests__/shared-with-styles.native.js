import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared-with-styles.base";

export default Component => {
  addSerializers(
    expect,
    compose(
      print,
      flattenStyleTransform,
      minimalNativeTransform
    )
  );

  shared(Component);
};
