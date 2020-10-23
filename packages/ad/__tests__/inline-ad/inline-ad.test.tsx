import React from "react";
import TestRenderer from "react-test-renderer";

import { InlineAd } from "../../src/inline-ad";
import { MeasureInlineContent } from "../../src/inline-ad/measure/MeasureInlineContent";
import { Measurements, ParagraphContent } from "@times-components-native/types";

jest.mock("../../src/inline-ad/measure/MeasureInlineContent", () => ({
  MeasureInlineContent: "MeasureInlineContent",
}));

jest.mock("../../src/ad", () => "AD");

jest.mock("react-native-image-zoom-viewer", () => "ImageZoomView");

const height = 630;

export const createParagraphWithText = (text: string): ParagraphContent => ({
  id: "some-paragraph-id",
  name: "paragraph",
  children: [{ name: "text", children: [], attributes: { value: text } }],
});

describe("InlineAd", () => {
  const para1 = createParagraphWithText("article content");
  const content = [para1];

  const props = {
    adConfig: {},
    display: "inline",
    inlineContent: content,
    defaultFont: { lineHeight: 26 },
    width: 300,
    height: 600,
    slotName: "native-inline-ad-c",
    skeletonProps: {
      data: [],
      isTablet: true,
      narrowContent: false,
      scale: 1,
    },
  };

  it("generates content for inline ad", () => {
    const renderer = TestRenderer.create(<InlineAd {...props} />);
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders inline ad via a render-prop", () => {
    const renderer = TestRenderer.create(<InlineAd {...props} />);
    const renderMeasuredContentsRenderProp = renderer.root.findByType(
      MeasureInlineContent,
    ).props["renderMeasuredContents"];

    const idWithHeight = `0-${height}`;
    const contentMeasurements: Measurements = {
      contents: {
        lines: {
          [idWithHeight]: [{ text: "line1" }],
        },
        heights: {
          [idWithHeight]: 40,
        },
      },
    };

    expect(
      renderMeasuredContentsRenderProp(contentMeasurements),
    ).toMatchSnapshot();
  });

  it("renders nothing if height is 0", () => {
    const renderer = TestRenderer.create(<InlineAd {...props} height={0} />);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
