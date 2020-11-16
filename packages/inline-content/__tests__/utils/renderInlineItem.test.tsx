import ReactTestRenderer from "react-test-renderer";

import { renderInlineItem } from "../../src/utils/renderInlineItem";
import { AdProps, ArticleImageProps, PullQuoteProps } from "../../src/types";

jest.mock("@times-components-native/ad", () => "Ad");
jest.mock("@times-components-native/article-image", () => "ArticleImage");
jest.mock("@times-components-native/pull-quote", () => "PullQuote");

describe("renderInlineItem", () => {
  it("renders nothing if no itemProps passed", () => {
    // @ts-ignore
    const renderer = ReactTestRenderer.create(renderInlineItem());

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders an ad if ad itemProps passed", () => {
    const adProps = {
      adConfig: {},
      baseUrl: "some-url",
      contextUrl: "some-context-url",
      display: "inline",
      height: 600,
      isLoading: false,
      originalName: "ad",
      slotName: "native-inline-ad-c",
      style: {},
      width: 300,
    } as AdProps;

    const renderer = ReactTestRenderer.create(
      // @ts-ignore
      renderInlineItem(adProps),
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders an inline article image if image itemProps passed", () => {
    const imageItemProps = {
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
        uri: "some image uri",
      },
      onImagePress: () => {
        return;
      },
      originalName: "image",
    } as ArticleImageProps;

    const renderer = ReactTestRenderer.create(
      // @ts-ignore
      renderInlineItem(imageItemProps),
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders a pull quote if pullQuote itemProps passed", () => {
    const pullQuoteItemProps = {
      caption: "some caption",
      children: [{ string: "some pull quote text" }],
      onTwitterLinkPress: () => {
        return;
      },
      originalName: "pullQuote",
      text: "some text",
      twitter: "some twitter text",
      width: 231,
    } as PullQuoteProps;

    const renderer = ReactTestRenderer.create(
      // @ts-ignore
      renderInlineItem(pullQuoteItemProps),
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
