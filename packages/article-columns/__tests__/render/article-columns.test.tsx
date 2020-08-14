import React from "react";
import TestRenderer from "react-test-renderer";

import { ArticleColumns } from "@times-components-native/article-columns/article-columns";
import { ParagraphContent } from "@times-components-native/article-columns/domain-types";
import MockMarkup from "@times-components-native/fixture-generator/src/mock-markup";
import { MeasureArticle } from "@times-components-native/article-columns/measure/MeasureArticle";
import { ArticleMeasurements } from "@times-components-native/article-columns/types";

jest.mock(
  "@times-components-native/article-columns/measure/MeasureArticle",
  () => ({
    MeasureArticle: "MeasureArticle",
  }),
);

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
        containerHeight={400}
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

    const articleMeasurements: ArticleMeasurements = {
      bylineHeight: 0,
      contents: {
        lines: {
          "0": [{ text: "line1" }],
        },
        heights: {
          "0": 40,
        },
      },
    };

    expect(
      renderMeasuredContentsRenderProp(articleMeasurements),
    ).toMatchSnapshot();
  });
});
