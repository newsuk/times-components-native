import { ParagraphContent } from "../domain-types";
import { ContentMeasurements } from "../types";

export const calculateInlineContentHeight = (
  contents: ParagraphContent[],
  contentMeasurements: ContentMeasurements,
): number =>
  contents.reduce(
    (agg, next) => contentMeasurements.contents.heights[next.id!] + agg,
    0,
  );
