import {
  ColumnContents,
  ColumnParameters,
  ArticleMeasurements,
} from "../types";
import { splitParagraphContentByLine } from "./splitParagraphContentByLine";
import { calculateContentsHeight } from "./calculateContentsHeight";

import { ParagraphContent } from "../domain-types";

// TODO IMPLEMENT TO GET BYLINE HEIGHT FACTORED IN
export const calculateHeightTakenOnPage = (
  columnIndex: number,
  articleMeasurements: ArticleMeasurements,
) => {
  if (columnIndex > 0) return 0;
  const bylineHeight = articleMeasurements.bylineHeight ?? 0;
  const bylineMargin = articleMeasurements.bylineMargin ?? 0;
  return bylineHeight + bylineMargin;
};

const getColumnIndex = (columns: ColumnContents[]) =>
  Math.max(columns.length - 1, 0);

export const chunkContentIntoColumns = (
  contents: ParagraphContent[],
  articleMeasurements: ArticleMeasurements,
  columnParameters: ColumnParameters,
  columns: ColumnContents[] = [],
): ColumnContents[] => {
  if (contents.length === 0) return columns;

  const columnIndex = getColumnIndex(columns);
  const currentContent = contents[0];
  const currentColumn = columns[columnIndex] || [];
  const { columnHeight } = columnParameters;

  const heightTakenOnPage = calculateHeightTakenOnPage(
    columnIndex,
    articleMeasurements,
  );
  const heightOfCurrentParagraph =
    articleMeasurements.contents.heights[currentContent.id!];
  const currentColumnHeight = calculateContentsHeight(
    currentColumn,
    articleMeasurements,
  );
  const heightRemainingInColumn =
    columnHeight - (currentColumnHeight + heightTakenOnPage);

  if (heightRemainingInColumn === 0) {
    // no capacity in current column, start adding into next column
    const updatedColumns = [...columns, []];
    return chunkContentIntoColumns(
      contents,
      articleMeasurements,
      columnParameters,
      updatedColumns,
    );
  }

  if (
    currentColumnHeight + heightTakenOnPage + heightOfCurrentParagraph <=
    columnHeight
  ) {
    // there is capacity in current column, adding next content into it
    const updatedColumns = [
      ...columns.slice(0, -1),
      currentColumn.concat(currentContent),
    ];
    return chunkContentIntoColumns(
      contents.slice(1),
      articleMeasurements,
      columnParameters,
      updatedColumns,
    );
  }

  // no capacity in current column, splitting content into this column and the next column
  const lineToSplit =
    heightRemainingInColumn / columnParameters.columnLineHeight!;
  const [
    contentA,
    contentB,
    updatedArticleMeasurements,
  ] = splitParagraphContentByLine(
    currentContent,
    lineToSplit,
    articleMeasurements,
    columnParameters.columnLineHeight!,
  );

  const updatedCurrentColumn = [...currentColumn, contentA];
  const updatedColumns = [...columns.slice(0, -1), updatedCurrentColumn, []];
  const nextContents = [contentB, ...contents.slice(1)];

  return chunkContentIntoColumns(
    nextContents,
    updatedArticleMeasurements,
    columnParameters,
    updatedColumns,
  );
};
