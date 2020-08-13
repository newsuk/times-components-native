import React from "react";
import { MeasureArticle } from "./measure/MeasureArticle";
import {
  ArticleContent,
  Bylines,
  ParagraphContent,
} from "@times-components-native/article-columns/domain-types";
import { chunkContentIntoColumns } from "@times-components-native/article-columns/utils/chunkContentIntoColumns";
import {
  Columns,
  SingleColumn,
} from "@times-components-native/article-columns/render/Columns";
import { TextStyle } from "react-native";
import { calculateColumnWidth } from "@times-components-native/article-columns/utils/calculateColumnWidth";

interface Props {
  articleContents: ArticleContent[];
  bylines: Bylines;
  containerWidth: number;
  containerHeight: number;
  lineHeight: number;
  columnCount: number;
  style: TextStyle;
}

const assignWithId = (c: ParagraphContent, idx: number): ParagraphContent => {
  c.id = `${idx}`;
  return c;
};

export const ArticleColumns: React.FC<Props> = ({
  articleContents,
  bylines,
  containerHeight,
  containerWidth,
  columnCount,
  lineHeight = 18,
  style,
}) => {
  const paragraphs = articleContents
    .filter((c): c is ParagraphContent => c.name === "paragraph")
    .map(assignWithId);

  const columnWidth = calculateColumnWidth({
    columnCount,
    columnGap: 10,
    containerWidth,
  });
  const columnParameters = {
    columnWidth,
    columnHeight: containerHeight,
    columnCount,
    columnLineHeight: lineHeight,
  };

  return (
    <MeasureArticle
      bylines={bylines}
      articleContents={paragraphs}
      columnParameters={columnParameters}
      style={style}
      renderMeasuredContents={(articleMeasurements) => {
        const articleColumns = chunkContentIntoColumns(
          paragraphs,
          articleMeasurements,
          columnParameters,
        ).slice(0, columnCount);
        return (
          <Columns>
            {articleColumns.map((articleColumn, index) => (
              <SingleColumn
                key={index}
                style={style}
                columnParameters={columnParameters}
                column={articleColumn}
              />
            ))}
          </Columns>
        );
      }}
    />
  );
};
