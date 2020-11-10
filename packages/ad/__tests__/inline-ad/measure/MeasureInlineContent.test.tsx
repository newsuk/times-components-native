import React from "react";
import TestRenderer from "react-test-renderer";

import { InnerMeasureInlineContent } from "../../../src/inline-ad/measure/MeasureInlineContent";
import { initialState } from "../../../src/inline-ad/measure/reducer";
import {
  ArticleContent,
  ParagraphContent,
} from "@times-components-native/types";
import { ContentParameters } from "../../../src/inline-ad/types";

jest.mock("../../../src/inline-ad/measure/MeasureInlineComponents", () => ({
  MeasureContent: "MeasureContent",
}));

const createParagraphWithText = (
  text: string,
  testData: Partial<ParagraphContent> = {},
): ParagraphContent => ({
  id: "some-paragraph-id",
  name: "paragraph",
  children: [{ name: "text", children: [], attributes: { value: text } }],
  ...testData,
});

const paragraphA: ArticleContent = createParagraphWithText("line1", {
  id: "p1",
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CaptureContents = ({ contentMeasurements }: any) => null;

const contentParameters: ContentParameters = {
  contentHeight: 2000,
  contentWidth: 339,
  contentLineHeight: 26,
};

describe("MeasureInlineContent", () => {
  it("renders everything to be measured", () => {
    const renderer = TestRenderer.create(
      <InnerMeasureInlineContent
        contentParameters={contentParameters}
        content={[paragraphA]}
        renderMeasuredContents={() => null}
        skeletonProps={{ some: "props" }}
        measurementState={initialState}
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("outputs rendered content once everything has been measured", () => {
    const renderer = TestRenderer.create(
      <InnerMeasureInlineContent
        contentParameters={contentParameters}
        content={[paragraphA]}
        renderMeasuredContents={(contentMeasurements) => (
          <CaptureContents contentMeasurements={contentMeasurements} />
        )}
        skeletonProps={{ some: "props" }}
        measurementState={{
          contents: {
            lines: { p1: [{ text: "line1" }] },
            heights: { p1: 20 },
          },
        }}
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();

    const contentMeasurements = renderer.root.findByType(CaptureContents).props[
      "contentMeasurements"
    ];
    expect(contentMeasurements).toEqual({
      contents: {
        lines: {
          p1: [{ text: "line1" }],
        },
        heights: {
          p1: 20,
        },
      },
    });
  });
});
