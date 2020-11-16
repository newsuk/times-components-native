import {
  InlineAdProps,
  InlineArticleImageProps,
  InlineContentProps,
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
