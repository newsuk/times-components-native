import React from "react";
import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  print,
  minimaliseTransform,
  minimalNativeTransform,
} from "@times-components-native/jest-serializer";
import "./mocks.native";
import {
  iterator,
  withTabletContext,
} from "@times-components-native/test-utils";

import ArticleInDepth from "../src/article-in-depth";
import sharedProps from "./shared-props";
import articleFixture from "../fixtures/full-article";

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

  const tests = [
    {
      name: "Article In Depth - Tablet",
      test() {
        const testInstance = TestRenderer.create(
          withTabletContext(
            <ArticleInDepth {...sharedProps} article={articleFixture()} />,
          ),
        );

        expect(testInstance).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
