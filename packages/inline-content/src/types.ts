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
  itemWidth: number;
}

export type SkeletonProps = Record<string, unknown>;

export type ArticleImageProps = {
  captionOptions: {
    caption: string;
    credits: string;
  };
  onImagePress: () => void;
  images: array;
  imageOptions: {
    display: string;
    ratio: string;
    index: number;
    uri: string;
    relativeWidth: number;
    relativeHeight: number;
    relativeHorizontalOffset: number;
    relativeVerticalOffset: number;
    narrowContent: boolean;
  };
};
