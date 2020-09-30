import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalNativeTransform,
  print,
  replacePropTransform,
} from "@times-components-native/jest-serializer";
import { hash } from "@times-components-native/test-utils";

import "./mocks";
import shared from "./shared.base";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform((value, key) => key === "style" || key === "testID"),
      replacePropTransform((value, key) =>
        key === "emptyStateMessage" ? hash(value) : value,
      ),
    ),
  );

  const props = {
    analyticsStream() {
      return null;
    },
    onArticlePress() {
      return null;
    },
  };

  shared(props);
};
