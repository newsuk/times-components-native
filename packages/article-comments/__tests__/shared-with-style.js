import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared-base";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      flattenStyleTransform,
      minimaliseTransform((value, key) => key !== "style")
    )
  );

  shared();
};
