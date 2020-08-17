import React from "react";
import { ArticleContent, ParagraphContent } from "./domain-types";
import { chunkContentIntoColumns } from "./utils/chunkContentIntoColumns";
import { Columns, SingleColumn } from "./render/Columns";
import { TextStyle } from "react-native";
import { calculateColumnWidth } from "./utils/calculateColumnWidth";
import { FrontPageByline } from "@times-components-native/front-page/front-page-byline";
import { BylineInput } from "@times-components-native/fixture-generator/src/types";
import { MeasureArticle } from "./measure/MeasureArticle";

interface Props {
  articleContents: ArticleContent[];
  bylines: BylineInput[];
  containerWidth: number;
  containerHeight: number;
  lineHeight: number;
  columnCount: number;
  style: TextStyle;
}

const assignWithId = (height: number) => (
  content: ParagraphContent,
  idx: number,
): ParagraphContent => {
  return {
    ...content,
    id: `${idx}-${height}`, //suffixing the height ensures that we re-measure the content if the orientation changes - and that we don't unnecessarily re-measure if orientation changes back
  };
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
    .map(assignWithId(containerHeight));

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
        );
        return (
          <Columns>
            <SingleColumn
              style={style}
              columnParameters={columnParameters}
              renderBefore={() => (
                <FrontPageByline
                  withKeyline={true}
                  byline={bylines}
                  containerStyle={{
                    marginBottom: articleMeasurements.bylineMargin ?? 0,
                  }}
                />
              )}
              column={articleColumns[0]}
            />
            {articleColumns
              .slice(1, columnCount)
              .map((articleColumn, index) => (
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
