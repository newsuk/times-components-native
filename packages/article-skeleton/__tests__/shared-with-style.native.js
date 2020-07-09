/* eslint-disable global-require */
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
import { setIsTablet } from "@tcn/mocks/dimensions";
import { FontStorage } from "@tcn/typeset";
import articleFixture from "../fixtures/full-article";
import shared, { renderArticle, fixtureArgs } from "./shared.base";

FontStorage.registerFont(
  "TimesDigitalW04",
  () => require("@tcn/test-utils").TestFont
);
FontStorage.registerFont(
  "TimesDigitalW04-Bold",
  () => require("@tcn/test-utils").TestFont
);
FontStorage.registerFont(
  "TimesDigitalW04-Italic",
  () => require("@tcn/test-utils").TestFont
);
FontStorage.registerFont(
  "TimesModern-Regular",
  () => require("@tcn/test-utils").TestFont
);

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
      name: "an Article Skeleton with responsive items",
      test() {
        setIsTablet(true);

        const article = articleFixture({ ...fixtureArgs });
        const testInstance = TestRenderer.create(
          <Responsive>{renderArticle(article)}</Responsive>
        );

        expect(testInstance).toMatchSnapshot();
      }
    }
  ];

  shared(TestRenderer.create, tests);
};
