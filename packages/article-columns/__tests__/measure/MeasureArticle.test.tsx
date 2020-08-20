import React from "react";
import TestRenderer from "react-test-renderer";

import { InnerMeasureArticle as MeasureArticle } from "../../measure/MeasureArticle";
import { initialState } from "../../measure/reducer";
import { ArticleContent, ParagraphContent } from "../../domain-types";
import { ColumnParameters } from "../../types";
import MockMarkup from "@times-components-native/fixture-generator/src/mock-markup";

jest.mock("../../measure/MeasureComponents", () => ({
  MeasureByline: "MeasureByline",
  MeasureHeadline: "MeasureHeadline",
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
const CaptureContents = ({ articleMeasurements }: any) => null;

const columnParameters: ColumnParameters = {
  columnHeight: 2000,
  columnWidth: 110,
  columnCount: 3,
  columnLineHeight: 20,
};

const bylines = new MockMarkup().addBylines().get();
const style = {
  fontSize: 14,
  lineHeight: 18,
};
describe("MeasureArticle", () => {
  it("renders everything to be measured", () => {
    const renderer = TestRenderer.create(
      <MeasureArticle
        bylines={bylines}
        columnParameters={columnParameters}
        style={style}
        articleContents={[paragraphA]}
        renderMeasuredContents={() => null}
        measurementState={initialState}
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("outputs rendered content once everything has been measured", () => {
    const renderer = TestRenderer.create(
      <MeasureArticle
        bylines={bylines}
        columnParameters={columnParameters}
        style={style}
        articleContents={[paragraphA]}
        renderMeasuredContents={(articleMeasurements) => (
          <CaptureContents articleMeasurements={articleMeasurements} />
        )}
        measurementState={{
          contents: {
            lines: { p1: [{ text: "line1" }] },
            heights: { p1: 20 },
          },
          bylineHeight: 20,
          bylineMargin: 0,
        }}
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();

    const articleMeasurements = renderer.root.findByType(CaptureContents).props[
      "articleMeasurements"
    ];
    expect(articleMeasurements).toEqual({
      bylineHeight: 20,
      bylineMargin: 0,
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
