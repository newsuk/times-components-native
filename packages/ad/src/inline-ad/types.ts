import { ParagraphContent } from "./domain-types";

export type Line = {
  text: string;
};
export type TextLayoutEvent = { lines: Line[] };
export type ChunkContents = ParagraphContent[];

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
