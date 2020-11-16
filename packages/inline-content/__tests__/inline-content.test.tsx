import React from "react";
import TestRenderer from "react-test-renderer";

import { Measurements, ParagraphContent } from "@times-components-native/types";
import { withTabletContext } from "@times-components-native/test-utils/src/responsiveContextUtil";
import InlineContent from "../src";
import { MeasureInlineContent } from "../src/measure/MeasureInlineContent";
import {
  InlineAdProps,
  InlineArticleImageProps,
  InlinePullQuoteProps,
} from "../src/types";

const windowWidth = 1000;

jest.mock("../src/measure/MeasureInlineContent", () => ({
  MeasureInlineContent: "MeasureInlineContent",
}));
jest.mock("@times-components-native/ad", () => "Ad");
jest.mock("@times-components-native/article-image", () => "ArticleImage");
jest.mock("@times-components-native/pull-quote", () => "PullQuote");
jest.mock("react-native-image-zoom-viewer", () => "ImageZoomView");

export const createParagraphWithText = (text: string): ParagraphContent => ({
  name: "paragraph",
  children: [{ name: "text", children: [], attributes: { value: text } }],
});

describe("InlineContent", () => {
  const paragraph = createParagraphWithText("article content");
  const content = [paragraph];

  describe("ad", () => {
    const props = {
      adConfig: {},
      baseUrl: "some-base-url",
      contextUrl: "some-context-url",
      defaultFont: { lineHeight: 26 },
      display: "inline",
      height: 600,
      inlineContent: content,
      isLoading: false,
      narrowContent: false,
      originalName: "ad",
      skeletonProps: {
        data: [],
        isTablet: true,
        narrowContent: false,
        scale: 1,
        windowWidth,
      },
      slotName: "native-inline-ad-c",
      style: {},
      width: 300,
    } as InlineAdProps;

    it("generates content measurements for inline ad", () => {
      const renderer = TestRenderer.create(
        withTabletContext(<InlineContent {...props} />),
      );
      expect(renderer.toJSON()).toMatchSnapshot();
    });

    it("renders content and inline ad via a render-prop", () => {
      const renderer = TestRenderer.create(
        withTabletContext(<InlineContent {...props} />),
      );
      const renderMeasuredContentsRenderProp = renderer.root.findByType(
        MeasureInlineContent,
      ).props["renderMeasuredContents"];

      const idWithWidth = `0-${windowWidth}`;
      const contentMeasurements: Measurements = {
        contents: {
          lines: {
            [idWithWidth]: [{ text: "line1" }],
          },
          heights: {
            [idWithWidth]: 40,
          },
        },
        itemHeight: null,
      };

      expect(
        renderMeasuredContentsRenderProp(contentMeasurements),
      ).toMatchSnapshot();
    });
  });

  describe("image", () => {
    const props = {
      caption: "some caption",
      credits: "some credits",
      defaultFont: { lineHeight: 26 },
      display: "inline",
      imageIndex: 0,
      inlineContent: content,
      narrowContent: false,
      onImagePress: () => {
        return;
      },
      originalName: "image",
      ratio: "16:9",
      relativeHeight: 900,
      relativeHorizontalOffset: 0,
      relativeVerticalOffset: 0,
      relativeWidth: 1600,
      url: "some image url",
    } as InlineArticleImageProps;

    it("generates content measurements for inline image", () => {
      const renderer = TestRenderer.create(
        withTabletContext(<InlineContent {...props} />),
      );
      expect(renderer.toJSON()).toMatchSnapshot();
    });

    it("renders content and inline image via a render-prop", () => {
      const renderer = TestRenderer.create(
        withTabletContext(<InlineContent {...props} />),
      );
      const renderMeasuredContentsRenderProp = renderer.root.findByType(
        MeasureInlineContent,
      ).props["renderMeasuredContents"];

      const idWithWidth = `0-${windowWidth}`;
      const contentMeasurements: Measurements = {
        contents: {
          lines: {
            [idWithWidth]: [{ text: "line1" }],
          },
          heights: {
            [idWithWidth]: 40,
          },
        },
        itemHeight: null,
      };

      expect(
        renderMeasuredContentsRenderProp(contentMeasurements),
      ).toMatchSnapshot();
    });
  });

  describe("pullQuote", () => {
    const props = {
      caption: {
        name: "some caption",
        text: "some text",
        twitter: "some twitter text",
      },
      children: [{ string: "some pull quote text" }],
      defaultFont: { lineHeight: 26 },
      inlineContent: content,
      onTwitterLinkPress: () => {
        return;
      },
      originalName: "pullQuote",
      width: 231,
    } as InlinePullQuoteProps;

    it("generates content measurements for pullQuote", () => {
      const renderer = TestRenderer.create(
        withTabletContext(<InlineContent {...props} />),
      );
      expect(renderer.toJSON()).toMatchSnapshot();
    });

    it("renders content and pullQuote ad via a render-prop", () => {
      const renderer = TestRenderer.create(
        withTabletContext(<InlineContent {...props} />),
      );
      const renderMeasuredContentsRenderProp = renderer.root.findByType(
        MeasureInlineContent,
      ).props["renderMeasuredContents"];

      const idWithWidth = `0-${windowWidth}`;
      const contentMeasurements: Measurements = {
        contents: {
          lines: {
            [idWithWidth]: [{ text: "line1" }],
          },
          heights: {
            [idWithWidth]: 40,
          },
        },
        itemHeight: null,
      };

      expect(
        renderMeasuredContentsRenderProp(contentMeasurements),
      ).toMatchSnapshot();
    });
  });
});
