import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  minimalNativeTransform,
  print,
  replacePropTransform
} from "@tcn/jest-serializer";
import { hash } from "@tcn/test-utils";

const longValues = new Set(["d", "transform"]);

addSerializers(
  expect,
  compose(
    print,
    minimalNativeTransform,
    minimaliseTransform(value => value === null),
    flattenStyleTransform,
    replacePropTransform(
      (value, key) =>
        longValues.has(key) ? hash(JSON.stringify(value)) : value
    )
  )
);
