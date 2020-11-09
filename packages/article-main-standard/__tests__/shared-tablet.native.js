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

import ArticleMainStandard from "../src/article-main-standard";
import articleProps from "./shared-article-props";
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
      name: "Article Main Standard - Tablet",
      test() {
        const testInstance = TestRenderer.create(
          withTabletContext(
            <ArticleMainStandard
              {...articleProps}
              article={articleFixture()}
            />,
          ),
        );

        expect(testInstance).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
