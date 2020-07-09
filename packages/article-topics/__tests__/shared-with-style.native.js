import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared-with-style.base";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimaliseTransform((value, key) => key !== "style"),
      flattenStyleTransform
    )
  );

  shared();
};
