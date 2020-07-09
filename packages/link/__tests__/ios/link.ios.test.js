import { Text } from "react-native";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import { iterator } from "@tcn/test-utils";
import shared from "../shared";

addSerializers(
  expect,
  compose(
    print,
    flattenStyleTransform,
    minimalNativeTransform
  )
);

iterator(shared(Text));
