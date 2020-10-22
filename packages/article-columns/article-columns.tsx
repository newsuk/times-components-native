import React from "react";
import {
  ArticleContent,
  Measurements,
  ParagraphContent,
} from "@times-components-native/types";

import { chunkContentIntoColumns } from "./utils/chunkContentIntoColumns";
import { Columns, SingleColumn } from "./render/Columns";
import { TextStyle } from "react-native";
import { calculateColumnWidth } from "./utils/calculateColumnWidth";
import { FrontPageByline } from "@times-components-native/front-page/front-page-byline";
import { BylineInput } from "@times-components-native/fixture-generator/src/types";
import { MeasureArticle } from "./measure/MeasureArticle";
import { spacing } from "@times-components-native/styleguide";

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
  // rendering columns with 0 height results in an infinite loop when chunking the content into columns. The height can be 0 during initial page render/reorientation
  if (containerHeight === 0) return null;

  const paragraphs = articleContents
    .filter((c): c is ParagraphContent => c.name === "paragraph")
    .map(assignWithId(containerHeight));

  const columnWidth = calculateColumnWidth({
    columnCount,
    columnGap: spacing(4),
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
      renderMeasuredContents={(articleMeasurements: Measurements) => {
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
                  showKeyline={true}
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
