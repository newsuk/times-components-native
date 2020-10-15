import {
  ColumnContents,
  ContentParameters,
  ContentMeasurements,
} from "../types";
// import { splitParagraphContentByLine } from "./splitParagraphContentByLine";
import { splitParagraphContentByLine } from "@times-components-native/article-columns/utils/splitParagraphContentByLine";
import { calculateInlineContentHeight } from "./calculateInlineContentHeight";

import { ParagraphContent } from "../domain-types";

const getColumnIndex = (columns: ColumnContents[]) =>
  Math.max(columns.length - 1, 0);

export const chunkInlineContent = (
  contents: ParagraphContent[],
  contentMeasurements: ContentMeasurements,
  contentParameters: ContentParameters,
  columns: ColumnContents[] = [],
): ColumnContents[] => {
  if (contents.length === 0) return columns;

  const columnIndex = getColumnIndex(columns);
  const currentContent = contents[0];
  const currentColumn = columns[columnIndex] || [];
  const { contentHeight } = contentParameters;

  const heightOfCurrentParagraph =
    contentMeasurements.contents.heights[currentContent.id!];
  const currentColumnHeight = calculateInlineContentHeight(
    currentColumn,
    contentMeasurements,
  );
  const heightRemainingInColumn = contentHeight - currentColumnHeight;

  if (heightRemainingInColumn === 0) {
    // no capacity in current column, start adding into next column
    const updatedColumns = [...columns, []];
    return chunkInlineContent(
      contents,
      contentMeasurements,
      contentParameters,
      updatedColumns,
    );
  }

  if (currentColumnHeight + heightOfCurrentParagraph <= contentHeight) {
    // there is capacity in current column, adding next content into it
    const updatedColumns = [
      ...columns.slice(0, -1),
      currentColumn.concat(currentContent),
    ];
    return chunkInlineContent(
      contents.slice(1),
      contentMeasurements,
      contentParameters,
      updatedColumns,
    );
  }

  // no capacity in current column, splitting content into this column and the next column
  const lineToSplit =
    heightRemainingInColumn / contentParameters.contentLineHeight!;
  const [
    contentA,
    contentB,
    updatedArticleMeasurements,
  ] = splitParagraphContentByLine(
    currentContent,
    lineToSplit,
    contentMeasurements,
    contentParameters.contentLineHeight!,
  );

  const updatedCurrentColumn = [...currentColumn, contentA];
  const updatedColumns = [...columns.slice(0, -1), updatedCurrentColumn, []];
  const nextContents = [contentB, ...contents.slice(1)];

  return chunkInlineContent(
    nextContents,
    updatedArticleMeasurements,
    contentParameters,
    updatedColumns,
  );
};
