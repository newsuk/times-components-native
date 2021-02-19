import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import shared from "./shared-base";
import renderComments from "./renderer";
import TestRenderer from "react-test-renderer";
import ArticleComments from "@times-components-native/article-comments";
import React from "react";
import { RemoteConfigProvider } from "@times-components-native/remote-config";

const omitKeys = new Set([
  "data",
  "disableVirtualization",
  "horizontal",
  "onViewableItemsChanged",
  "selectable",
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

  shared();

  it("zero comments", () => {
    const testInstance = renderComments({ count: 0, enabled: true });
    expect(testInstance).toMatchSnapshot();
  });

  it("single comment", () => {
    const testInstance = renderComments({ count: 1, enabled: true });
    expect(testInstance).toMatchSnapshot();
  });

  it("should render disabled-comments if commentsGloballyDisabled", () => {
    const testInstance = TestRenderer.create(
      <RemoteConfigProvider config={{ commentsGloballyDisabled: true }}>
        <ArticleComments
          articleId="dummy-article-id"
          commentCount={10}
          commentsEnabled={true}
          onCommentGuidelinesPress={() => null}
          onCommentsPress={() => null}
          spotAccountId=""
          url="dummy-article-url"
          tooltips={[]}
        />
      </RemoteConfigProvider>,
    );

    expect(testInstance).toMatchSnapshot();
  });
};
