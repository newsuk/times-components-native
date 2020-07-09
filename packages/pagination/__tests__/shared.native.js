import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  minimalNative
} from "@tcn/jest-serializer";
import shared from "./shared.base";

export default withPageState => {
  addSerializers(expect, minimalNative);

  shared(withPageState, TestRenderer.create);
};
