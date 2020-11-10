import { Measurements, ParagraphContent } from "@times-components-native/types";

export const calculateContentsHeight = (
  contents: ParagraphContent[],
  articleMeasurements: Measurements,
): number =>
  contents.reduce(
    (agg, next) => articleMeasurements.contents.heights[next.id!] + agg,
    0,
  );
