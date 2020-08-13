import { ParagraphContent } from "@times-components-native/article-columns/domain-types";
import { ArticleMeasurements } from "@times-components-native/article-columns/types";

export const calculateContentsHeight = (
  contents: ParagraphContent[],
  articleMeasurements: ArticleMeasurements,
): number =>
  contents.reduce(
    (agg, next) => articleMeasurements.contents.heights[next.id!] + agg,
    0,
  );
