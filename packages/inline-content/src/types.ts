import { ViewStyle } from "react-native";

import { ParagraphContent } from "@times-components-native/types";

export type Line = {
  text: string;
};
export type TextLayoutEvent = { lines: Line[] };
export type ChunkContents = ParagraphContent[];

export interface ContentParameters {
  contentHeight: number;
  contentLineHeight: number;
  contentWidth: number;
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
  width: number;
}

export interface InlineAdProps extends BaseInlineContentProps {
  baseUrl: string;
  contextUrl: string;
  isLoading: boolean;
  slotName: string;
  style: ViewStyle;
}

export interface InlineArticleImageProps extends BaseInlineContentProps {
  caption: string;
  credits: string;
  imageIndex: number;
  narrowContent: boolean;
  onImagePress: () => void;
  ratio: string;
  relativeHeight: number;
  relativeHorizontalOffset: number;
  relativeVerticalOffset: number;
  relativeWidth: number;
  url: string;
}

export interface InlinePullQuoteProps extends BaseInlineContentProps {
  caption: { name: string; text: string; twitter: string };
  children: [{ string: string }];
  onTwitterLinkPress: () => void;
}

export type InlineContentProps =
  | InlineAdProps
  | InlineArticleImageProps
  | InlinePullQuoteProps;

export type AdProps = {
  adConfig: Record<string, unknown>;
  baseUrl: string;
  contextUrl: string;
  display: string;
  isLoading: boolean;
  originalName: string;
  slotName: string;
  style: ViewStyle;
  width: number;
};

export type ArticleImageProps = {
  captionOptions: {
    caption: string;
    credits: string;
  };
  images: [];
  imageOptions: {
    display: string;
    index: number;
    narrowContent: boolean;
    ratio: string;
    relativeHeight: number;
    relativeHorizontalOffset: number;
    relativeVerticalOffset: number;
    relativeWidth: number;
    uri: string;
  };
  onImagePress: () => void;
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

export type InlineItemProps = AdProps | ArticleImageProps | PullQuoteProps;
