import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import shared from "./shared-with-style.base";
import topic from "./fixtures";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform((value, key) => key !== "style"),
      flattenStyleTransform,
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
