import React from "react";
import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  minimalNativeTransform,
  minimaliseTransform,
  flattenStyleTransform,
  print,
} from "@times-components-native/jest-serializer";
import { iterator } from "@times-components-native/test-utils";

import renderParagraph from "./renderer";
import dropCapData from "./fixtures/drop-cap-showcase.json";
import paragraphData from "./fixtures/paragraph-showcase.json";
import inlineParagraphData from "./fixtures/inline-paragraph.json";
import {
  withMobileContext,
  withTabletContext,
} from "@times-components-native/test-utils";

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      flattenStyleTransform,
      minimaliseTransform((value, key) => key !== "style"),
    ),
  );

  iterator([
    {
      name: "paragraph with a drop cap",
      test: async () => {
        const testInstance = TestRenderer.create(
          withMobileContext(renderParagraph(dropCapData)),
        );
        expect(testInstance).toMatchSnapshot();
      },
    },
    {
      name: "inline paragraph",
      test: async () => {
        const testInstance = TestRenderer.create(
          withTabletContext(renderParagraph(inlineParagraphData)),
        );
        expect(testInstance).toMatchSnapshot();
      },
    },
    {
      name: "responsive tablet paragraph",
      test: async () => {
        const testInstance = TestRenderer.create(
          withTabletContext(renderParagraph(paragraphData)),
        );
        expect(testInstance).toMatchSnapshot();
      },
    },
    {
      name: "responsive tablet paragraph with a drop cap",
      test: async () => {
        const testInstance = TestRenderer.create(
          withTabletContext(renderParagraph(dropCapData)),
        );
        expect(testInstance).toMatchSnapshot();
      },
    },
  ]);
};
