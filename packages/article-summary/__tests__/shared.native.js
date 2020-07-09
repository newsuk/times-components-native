import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared.base";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimaliseTransform((value, key) => key === "style" || key === "testID"),
      minimalNativeTransform
    )
  );

  shared();
};
