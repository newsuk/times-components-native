import { ParagraphContent } from "@times-components-native/article-columns/domain-types";

export type Line = {
  text: string;
};
export type TextLayoutEvent = { lines: Line[] };
export type ColumnContents = ParagraphContent[];
export interface PageColumn {
  byline?: {
    height: number;
  };
  image?: {
    height: number;
    margin: number;
  };
  contents: ColumnContents;
  contentHeight: number;
}

export interface ArticleMeasurements {
  contents: {
    lines: { [key: string]: Line[] };
    heights: { [key: string]: number };
  };
  bylineHeight: number | null;
  bylineMargin: number | null;
}

export interface ColumnParameters {
  columnWidth: number;
  columnHeight: number;
  columnCount: number;
  columnLineHeight: number;
}

export interface FontScale {
  fontSize: number;
  lineHeight: number;
}
