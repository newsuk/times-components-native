import {
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

  if (originalName === "image") {
    const {
      caption,
      credits,
      display,
      imageIndex,
      narrowContent,
      onImagePress,
      ratio,
      relativeWidth,
      relativeHeight,
      relativeHorizontalOffset,
      relativeVerticalOffset,
      url,
    } = props as InlineArticleImageProps;

    return {
      captionOptions: {
        caption,
        credits,
      },
      onImagePress,
      originalName,
      images: [],
      imageOptions: {
        display,
        ratio,
        index: imageIndex,
        uri: url,
        relativeWidth,
        relativeHeight,
        relativeHorizontalOffset,
        relativeVerticalOffset,
        narrowContent,
      },
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
