import {
  addSerializers,
  compose,
  minimalNativeTransform,
  print,
  replacePropTransform,
} from "@times-components-native/jest-serializer";
import { hash } from "@times-components-native/test-utils";
import shared from "./shared-loading.base";
import author from "./fixtures";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      replacePropTransform((value, key) =>
        key === "emptyStateMessage" ? hash(value) : value,
      ),
    ),
  );

  const props = {
    analyticsStream() {
      return null;
    },
    author,
    onArticlePress() {
      return null;
    },
    onTwitterLinkPress() {
      return null;
    },
    refetch() {
      return null;
    },
    slug: "some-slug",
  };

  shared(props);
};
