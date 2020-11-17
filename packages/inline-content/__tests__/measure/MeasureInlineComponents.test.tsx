import React from "react";
import { Text, View } from "react-native";
import ReactTestRenderer from "react-test-renderer";

import { ParagraphContent } from "@times-components-native/types";
import { InlineMeasurementDispatch } from "../../src/measure/InlineMeasurementDispatchContext";
import {
  MeasureContent,
  MeasureItem,
} from "../../src/measure/MeasureInlineComponents";
import { InlineItemProps } from "../../src/types";

jest.mock("@times-components-native/ad", () => "Ad");
jest.mock("@times-components-native/article-image", () => "ArticleImage");
jest.mock("@times-components-native/pull-quote", () => "PullQuote");
jest.mock("react-native-image-zoom-viewer", () => "ImageZoomView");

export const createParagraphWithText = (text: string): ParagraphContent => ({
  id: "some-paragraph-id",
  name: "paragraph",
  children: [{ name: "text", children: [], attributes: { value: text } }],
});

const skeletonProps = {
  data: [],
  isTablet: true,
  narrowContent: false,
  scale: 1,
};

describe("MeasureContent", () => {
  const paragraph = createParagraphWithText("abc");
  it("renders the content", () => {
    const renderer = ReactTestRenderer.create(
      <MeasureContent content={paragraph} skeletonProps={skeletonProps} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("records the measurement", () => {
    const mock = jest.fn();
    const renderer = ReactTestRenderer.create(
      <InlineMeasurementDispatch.Provider value={mock}>
        <MeasureContent content={paragraph} skeletonProps={skeletonProps} />
      </InlineMeasurementDispatch.Provider>,
    );

    renderer.root.findByType(View).props["onLayout"]({
      nativeEvent: { layout: { height: 10 } },
    });

    expect(mock).toHaveBeenCalledWith({
      payload: 10,
      id: paragraph.id,
      type: "SET_INLINE_CONTENT_HEIGHT",
    });
  });

  it("records the captured lines", () => {
    const mock = jest.fn();
    const renderer = ReactTestRenderer.create(
      <InlineMeasurementDispatch.Provider value={mock}>
        <MeasureContent content={paragraph} skeletonProps={skeletonProps} />
      </InlineMeasurementDispatch.Provider>,
    );

    renderer.root.findAllByType(Text)[0].props["onTextLayout"]({
      nativeEvent: { lines: [{ text: "abc" }] },
    });

    expect(mock).toHaveBeenCalledWith({
      payload: [{ text: "abc" }],
      id: paragraph.id,
      type: "SET_INLINE_CONTENT_LINES",
    });
  });
});

describe("MeasureItem", () => {
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
  } as InlineItemProps;

  it("renders a pull quote", () => {
    const renderer = ReactTestRenderer.create(
      <MeasureItem itemProps={pullQuoteItemProps} width={231} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

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
  } as InlineItemProps;

  it("renders an inline image", () => {
    const renderer = ReactTestRenderer.create(
      <MeasureItem itemProps={imageItemProps} width={231} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("records the measurement of an item", () => {
    const mock = jest.fn();
    const renderer = ReactTestRenderer.create(
      <InlineMeasurementDispatch.Provider value={mock}>
        <MeasureItem itemProps={pullQuoteItemProps} width={231} />,
      </InlineMeasurementDispatch.Provider>,
    );

    renderer.root.findByType(View).props["onLayout"]({
      nativeEvent: { layout: { height: 300 } },
    });

    expect(mock).toHaveBeenCalledWith({
      height: 300,
      type: "SET_INLINE_ITEM_HEIGHT",
    });
  });
});
