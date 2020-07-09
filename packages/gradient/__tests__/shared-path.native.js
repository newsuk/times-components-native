import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  minimalise
} from "@tcn/jest-serializer";
import shared from "./shared.base";

export default () => {
  addSerializers(
    expect,
    minimalise((value, key) => key !== "d" && key !== "transform")
  );

  shared(TestRenderer.create);
};
