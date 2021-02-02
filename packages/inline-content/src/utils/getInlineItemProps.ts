import {
  InlineAdProps,
  InlineArticleImageProps,
  InlineContentProps,
  InlineDropCapProps,
  InlineItemProps,
  InlinePullQuoteProps,
} from "../types";

export const getInlineItemProps = (
  props: InlineContentProps,
  inlineItemWidth: number,
): InlineItemProps | undefined => {
  const { originalName } = props;

  if (originalName === "ad") {
    return props as InlineAdProps;
  }

  if (originalName === "dropcap") {
    const {
      dropCapColor,
      dropCapFont,
      dropCapFontSize,
      dropCapText,
      height,
      originalName,
      narrowContent,
      skeletonProps,
      width,
    } = props as InlineDropCapProps;

    const scale = skeletonProps.scale as string;

    return {
      dropCapColor,
      dropCapFont,
      dropCapFontSize,
      dropCapText,
      height,
      originalName,
      narrowContent,
      scale,
      width,
    };
  }

  if (originalName === "image") {
    const {
      caption,
      credits,
      display,
      imageIndex,
      narrowContent,
      onImagePress,
      ratio,
      relativeHeight,
      relativeHorizontalOffset,
      relativeVerticalOffset,
      relativeWidth,
      url,
    } = props as InlineArticleImageProps;

    return {
      captionOptions: {
        caption,
        credits,
      },
      images: [],
      imageOptions: {
        display,
        index: imageIndex,
        narrowContent,
        ratio,
        relativeHeight,
        relativeHorizontalOffset,
        relativeVerticalOffset,
        relativeWidth,
        uri: url,
      },
      onImagePress,
      originalName,
    };
  }

  if (originalName === "pullQuote") {
    const {
      caption: { name, text, twitter },
      children,
      onTwitterLinkPress,
    } = props as InlinePullQuoteProps;

    return {
      caption: name,
      children,
      onTwitterLinkPress,
      originalName,
      text,
      twitter,
      width: inlineItemWidth,
    };
  }
};
