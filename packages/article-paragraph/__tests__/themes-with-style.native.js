import {
  addSerializers,
  compose,
  minimalNativeTransform,
  minimaliseTransform,
  flattenStyleTransform,
  print
} from "@tcn/jest-serializer";
import { iterator } from "@tcn/test-utils";
import tests from "./themes-with-style.base";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      flattenStyleTransform,
      minimaliseTransform((value, key) => key !== "style")
    )
  );

  iterator(tests);
};
