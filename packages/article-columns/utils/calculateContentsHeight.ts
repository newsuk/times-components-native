import { ParagraphContent } from "../domain-types";
import { ArticleMeasurements } from "../types";

export const calculateContentsHeight = (
  contents: ParagraphContent[],
  articleMeasurements: ArticleMeasurements,
): number =>
  contents.reduce(
    (agg, next) => articleMeasurements.contents.heights[next.id!] + agg,
    0,
  );
