import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  print,
  minimaliseTransform,
  minimalNativeTransform,
} from "@times-components-native/jest-serializer";
import "./mocks";
import shared from "./shared.base";

const omitKeys = new Set([
  "ListHeaderComponent",
  "data",
  "disableVirtualization",
  "horizontal",
  "onViewableItemsChanged",
  "style",
  "testID",
  "viewabilityConfig",
  "viewabilityConfigCallbackPairs",
]);

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform((value, key) => omitKeys.has(key)),
    ),
  );

  shared(TestRenderer.create);
};
