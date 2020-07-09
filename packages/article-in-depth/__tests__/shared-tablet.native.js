import React from "react";
import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  print,
  minimaliseTransform,
  minimalNativeTransform
} from "@tcn/jest-serializer";
import "./mocks.native";
import Responsive from "@tcn/responsive";
import { iterator } from "@tcn/test-utils";
import { setIsTablet } from "@tcn/mocks/dimensions";

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
      flattenStyleTransform
    )
  );

  const tests = [
    {
      name: "Article In Depth - Tablet",
      test() {
        setIsTablet(true);

        const testInstance = TestRenderer.create(
          <Responsive>
            <ArticleInDepth {...sharedProps} article={articleFixture()} />
          </Responsive>
        );

        expect(testInstance).toMatchSnapshot();
      }
    }
  ];

  iterator(tests);
};
