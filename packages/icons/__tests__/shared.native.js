import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  print,
  replacePropTransform
} from "@tcn/jest-serializer";
import { hash } from "@tcn/test-utils";
import shared from "./shared.base";
import longKeysSet from "./shared-long-keys-set";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      flattenStyleTransform,
      minimaliseTransform((value, key) => key === "opacity"),
      replacePropTransform(
        (value, key) =>
          longKeysSet.has(key) ? hash(JSON.stringify(value)) : value
      )
    )
  );

  shared(TestRenderer.create);
};
