import { getInlineItemProps } from "../../src/utils/getInlineItemProps";
import {
  InlineAdProps,
  InlineArticleImageProps,
  InlinePullQuoteProps,
} from "../../src/types";

describe("getInlineItemProps", () => {
  it("returns props unchanged for an ad", () => {
    const inlineItemWidth = 300;
    const adProps = { originalName: "ad" } as InlineAdProps;

    const inlineAdProps = getInlineItemProps(adProps, inlineItemWidth);

    expect(inlineAdProps).toEqual(adProps);
  });

  it("returns transformed props for an inline image", () => {
    const inlineItemWidth = 231;
    const imageProps = {
      caption: "some caption",
      credits: "some credits",
      display: "inline",
      imageIndex: 0,
      narrowContent: false,
      onImagePress: () => {
        return;
      },
      originalName: "image",
      ratio: "16:9",
      relativeHeight: 900,
      relativeHorizontalOffset: 0,
      relativeVerticalOffset: 0,
      relativeWidth: 1600,
      url: "some image url",
    } as InlineArticleImageProps;

    const inlineImageProps = getInlineItemProps(imageProps, inlineItemWidth);

    expect(JSON.stringify(inlineImageProps)).toBe(
      JSON.stringify({
        captionOptions: {
          caption: "some caption",
          credits: "some credits",
        },
        images: [],
        imageOptions: {
          display: "inline",
          index: 0,
          narrowContent: false,
          ratio: "16:9",
          relativeHeight: 900,
          relativeHorizontalOffset: 0,
          relativeVerticalOffset: 0,
          relativeWidth: 1600,
          uri: "some image url",
        },
        onImagePress: () => {
          return;
        },
        originalName: "image",
      }),
    );
  });

  it("returns transformed props for a pull quote", () => {
    const inlineItemWidth = 231;
    const pullQuoteItemProps = {
      caption: {
        name: "some caption",
        text: "some text",
        twitter: "some twitter text",
      },
      children: [{ string: "some pull quote text" }],
      onTwitterLinkPress: () => {
        return;
      },
      originalName: "pullQuote",
      width: 231,
    } as InlinePullQuoteProps;

    const inlinePullQuoteProps = getInlineItemProps(
      pullQuoteItemProps,
      inlineItemWidth,
    );

    expect(JSON.stringify(inlinePullQuoteProps)).toBe(
      JSON.stringify({
        caption: "some caption",
        children: [{ string: "some pull quote text" }],
        onTwitterLinkPress: () => {
          return;
        },
        originalName: "pullQuote",
        text: "some text",
        twitter: "some twitter text",
        width: 231,
      }),
    );
  });
});
