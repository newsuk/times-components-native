import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalNativeTransform,
  print,
  replacePropTransform,
} from "@times-components-native/jest-serializer";
import { hash } from "@times-components-native/test-utils";
import shared from "./shared.base";
import topic from "./fixtures";

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
    refetch() {
      return null;
    },
    slug: "some-slug",
    topic,
  };

  shared(props);
};
