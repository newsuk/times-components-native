import {
  ChunkContents,
  ContentParameters,
  ContentMeasurements,
} from "../types";
// import { splitParagraphContentByLine } from "./splitParagraphContentByLine";
import { splitParagraphContentByLine } from "@times-components-native/article-columns/utils/splitParagraphContentByLine";

import { ParagraphContent } from "../domain-types";

type ChunkedContent = {
  chunks: ChunkContents[];
  currentInlineContentHeight: number;
};

export const chunkInlineContent = (
  contents: ParagraphContent[],
  contentMeasurements: ContentMeasurements,
  contentParameters: ContentParameters,
): ChunkedContent => {
  if (contents.length === 0)
    return { chunks: [], currentInlineContentHeight: 0 };

  const { contentHeight, contentLineHeight } = contentParameters;

  const chunkedContent = contents.reduce(
    ({ chunks, currentInlineContentHeight }, currentContent) => {
      const currentChunkIndex = Math.max(chunks.length - 1, 0);
      const currentChunk = chunks[currentChunkIndex] || [];

      if (currentChunkIndex === 1) {
        return {
          chunks: [chunks[0], [...currentChunk, currentContent]],
          currentInlineContentHeight,
        };
      }

      const inlineContentHeightRemaining =
        contentHeight - currentInlineContentHeight;

      // no capacity in inline chunk, start adding into overflow chunk
      if (inlineContentHeightRemaining === 0) {
        return {
          chunks: [currentChunk, []],
          currentInlineContentHeight,
        };
      }

      const currentParagraphHeight =
        contentMeasurements.contents.heights[currentContent.id!];

      const potentialInlineContentHeight =
        currentInlineContentHeight + currentParagraphHeight;

      // there is capacity in inline chunk, adding next content into it
      if (potentialInlineContentHeight <= contentHeight) {
        return {
          chunks: [[...currentChunk, currentContent]],
          currentInlineContentHeight: potentialInlineContentHeight,
        };
      }

      // not enough capacity in inline chunk, splitting content into this chunk and the overflow chunk
      const provisionalLineToSplit =
        inlineContentHeightRemaining / contentLineHeight!;
      const actualLineToSplit = Math.ceil(provisionalLineToSplit);

      const totalLinesHeightAdjustment = contentLineHeight * actualLineToSplit;

      const adjustmentHeightDiffernce =
        currentParagraphHeight - totalLinesHeightAdjustment;

      // final adjustment last paragraph lines fit without bottom padding
      const paddingAdjustment =
        adjustmentHeightDiffernce <= 20 ? adjustmentHeightDiffernce : 0;

      const adjustedInlineContentHeight =
        currentInlineContentHeight +
        totalLinesHeightAdjustment +
        paddingAdjustment;

      const [
        contentA,
        contentB,
        updatedArticleMeasurements,
      ] = splitParagraphContentByLine(
        currentContent,
        actualLineToSplit,
        contentMeasurements,
        contentLineHeight!,
      );

      return {
        chunks: [[...currentChunk, contentA], [contentB]],
        currentInlineContentHeight: adjustedInlineContentHeight,
      };
    },
    { chunks: [], currentInlineContentHeight: 0 },
  );

  return chunkedContent;
};
