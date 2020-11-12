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

interface BaseInlineContentProps {
  adConfig: Record<string, unknown>;
  defaultFont: { lineHeight: number };
  display: string;
  height: number;
  inlineContent: ParagraphContent[];
  narrowContent: boolean;
  originalName: string;
  skeletonProps: SkeletonProps;
  slotName: string;
  width: number;
}

export interface InlineArticleImageProps extends BaseInlineContentProps {
  caption: string;
  credits: string;
  imageIndex: number;
  narrowContent: boolean;
  onImagePress: () => void;
  ratio: string;
  relativeWidth: number;
  relativeHeight: number;
  relativeHorizontalOffset: number;
  relativeVerticalOffset: number;
  url: string;
}

export interface InlinePullQuoteProps extends BaseInlineContentProps {
  caption: { name: string; text: string; twitter: string };
  children: [{ string: string }];
  onTwitterLinkPress: () => void;
}

export type InlineContentProps = InlineArticleImageProps | InlinePullQuoteProps;

export type ArticleImageProps = {
  captionOptions: {
    caption: string;
    credits: string;
  };
  onImagePress: () => void;
  images: [];
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
  originalName: string;
};

export type PullQuoteProps = {
  caption: string;
  children: [{ string: string }];
  onTwitterLinkPress: () => void;
  originalName: string;
  text: string;
  twitter: string;
  width: number;
};

export type InlineItemProps = ArticleImageProps | PullQuoteProps;
