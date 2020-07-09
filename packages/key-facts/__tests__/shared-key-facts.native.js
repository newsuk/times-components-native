import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import renderKeyFacts from "./shared-render-key-facts";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform((value, key) => key === "style")
    )
  );

  renderKeyFacts(TestRenderer.create);
};
