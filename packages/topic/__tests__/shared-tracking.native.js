import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalNativeTransform,
  print,
  replacePropTransform
} from "@tcn/jest-serializer";
import { hash } from "@tcn/test-utils";
import shared from "./shared-tracking.base";
import topic from "./fixtures";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform((value, key) => key === "style" || key === "testID"),
      replacePropTransform(
        (value, key) => (key === "emptyStateMessage" ? hash(value) : value)
      )
    )
  );

  const props = {
    analyticsStream() {},
    onArticlePress() {},
    refetch() {},
    slug: "some-slug",
    topic
  };

  shared(props);
};
