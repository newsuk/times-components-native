import React from "react";
import { Text, View } from "react-native";
import ReactTestRenderer from "react-test-renderer";

import { MeasureContent } from "../../../src/inline-ad/measure/MeasureInlineComponents";
import { InlineMeasurementDispatch } from "../../../src/inline-ad/measure/InlineMeasurementDispatchContext";
import { ParagraphContent } from "@times-components-native/types";
import { withMobileContext } from "@times-components-native/test-utils";

export const createParagraphWithText = (text: string): ParagraphContent => ({
  id: "some-paragraph-id",
  name: "paragraph",
  children: [{ name: "text", children: [], attributes: { value: text } }],
});

jest.mock("react-native-image-zoom-viewer", () => "ImageZoomView");

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
      withMobileContext(
        <MeasureContent content={paragraph} skeletonProps={skeletonProps} />,
      ),
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
