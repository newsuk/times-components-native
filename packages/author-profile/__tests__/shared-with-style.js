import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import shared from "./shared-with-style.base";
import author from "./fixtures";

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
    displayWidth: 1024,
    displayHeight: 768,
    fontScale: 1,
  };

  shared(props);
};
