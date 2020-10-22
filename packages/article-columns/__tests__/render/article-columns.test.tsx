import React from "react";
import TestRenderer from "react-test-renderer";

import { ArticleColumns } from "../../article-columns";
import MockMarkup from "@times-components-native/fixture-generator/src/mock-markup";
import { MeasureArticle } from "../../measure/MeasureArticle";
import { Measurements, ParagraphContent } from "@times-components-native/types";

jest.mock("../../measure/MeasureArticle", () => ({
  MeasureArticle: "MeasureArticle",
}));

const height = 400;

export const createParagraphWithText = (text: string): ParagraphContent => ({
  id: "some-paragraph-id",
  name: "paragraph",
  children: [{ name: "text", children: [], attributes: { value: text } }],
});

const style = { fontSize: 14, lineHeight: 18 };
describe("ArticleColumns", () => {
  const contents = createParagraphWithText("article content");
  const bylines = new MockMarkup().addBylines().get();

  it("generates columns for article content", () => {
    const renderer = TestRenderer.create(
      <ArticleColumns
        style={style}
        articleContents={[contents]}
        containerWidth={200}
        containerHeight={height}
        columnCount={3}
        lineHeight={18}
        bylines={bylines}
      />,
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders navigator via a render-prop with generated pages", () => {
    const renderer = TestRenderer.create(
      <ArticleColumns
        style={style}
        articleContents={[contents]}
        containerWidth={200}
        containerHeight={400}
        columnCount={3}
        lineHeight={18}
        bylines={bylines}
      />,
    );
    const renderMeasuredContentsRenderProp = renderer.root.findByType(
      MeasureArticle,
    ).props["renderMeasuredContents"];

    const idWithHeight = `0-${height}`;
    const articleMeasurements: Measurements = {
      bylineHeight: 20,
      bylineMargin: 10,
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
      renderMeasuredContentsRenderProp(articleMeasurements),
    ).toMatchSnapshot();
  });

  it("renders nothing if height is 0", () => {
    const renderer = TestRenderer.create(
      <ArticleColumns
        style={style}
        articleContents={[contents]}
        containerWidth={200}
        containerHeight={0}
        columnCount={3}
        lineHeight={18}
        bylines={bylines}
      />,
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
