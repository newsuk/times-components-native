import { ParagraphContent } from "./domain-types";

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

export interface ContentMeasurements {
  contents: {
    lines: { [key: string]: Line[] };
    heights: { [key: string]: number };
  };
}

export interface ContentParameters {
  contentWidth: number;
  contentHeight: number;
  contentLineHeight: number;
}

// export interface FontScale {
//   fontSize: number;
//   lineHeight: number;
// }
