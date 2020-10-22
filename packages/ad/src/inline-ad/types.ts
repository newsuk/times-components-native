import { ParagraphContent } from "@times-components-native/types";

export type Line = {
  text: string;
};
export type TextLayoutEvent = { lines: Line[] };
export type ChunkContents = ParagraphContent[];

export interface ContentParameters {
  contentWidth: number;
  contentHeight: number;
  contentLineHeight: number;
}

export type SkeletonProps = Record<string, unknown>;
