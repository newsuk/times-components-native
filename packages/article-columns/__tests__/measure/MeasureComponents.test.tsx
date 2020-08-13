import React from "react";
import { Text, View } from "react-native";
import ReactTestRenderer from "react-test-renderer";
import { ColumnParameters } from "@times-components-native/article-columns/types";
import MockMarkup from "@times-components-native/fixture-generator/src/mock-markup";
import {
  MeasureByline,
  MeasureContent,
} from "@times-components-native/article-columns/measure/MeasureComponents";
import { MeasurementDispatch } from "@times-components-native/article-columns/measure/MeasurementDispatchContext";
import { ParagraphContent } from "@times-components-native/article-columns/domain-types";

jest.mock("@times-components-native/article-byline", () => "Byline");

const columnParameters: ColumnParameters = {
  columnCount: 3,
  columnHeight: 1000,
  columnWidth: 110,
  columnLineHeight: 20,
};

describe("MeasureByline", () => {
  const byline = new MockMarkup().addBylines().get();
  it("renders the byline", () => {
    const renderer = ReactTestRenderer.create(
      <MeasureByline bylines={[byline]} columnParameters={columnParameters} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("records the measurement", () => {
    const mock = jest.fn();
    const renderer = ReactTestRenderer.create(
      <MeasurementDispatch.Provider value={mock}>
        <MeasureByline bylines={[byline]} columnParameters={columnParameters} />
      </MeasurementDispatch.Provider>,
    );

    renderer.root.findByType(View).props["onLayout"]({
      nativeEvent: { layout: { height: 10 } },
    });

    expect(mock).toHaveBeenCalledWith({
      payload: 10,
      type: "SET_BYLINE_HEIGHT",
    });
  });
});

export const createParagraphWithText = (text: string): ParagraphContent => ({
  id: "some-paragraph-id",
  name: "paragraph",
  children: [{ name: "text", children: [], attributes: { value: text } }],
});

describe("MeasureContent", () => {
  const paragraph = createParagraphWithText("abc");
  const style = { fontSize: 14, lineHeight: 18 };
  it("renders the content", () => {
    const renderer = ReactTestRenderer.create(
      <MeasureContent content={paragraph} style={style} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("records the measurement", () => {
    const mock = jest.fn();
    const renderer = ReactTestRenderer.create(
      <MeasurementDispatch.Provider value={mock}>
        <MeasureContent content={paragraph} style={style} />
      </MeasurementDispatch.Provider>,
    );

    renderer.root.findByType(View).props["onLayout"]({
      nativeEvent: { layout: { height: 10 } },
    });

    expect(mock).toHaveBeenCalledWith({
      payload: 10,
      id: paragraph.id,
      type: "SET_CONTENT_HEIGHT",
    });
  });

  it("records the captured lines", () => {
    const mock = jest.fn();
    const renderer = ReactTestRenderer.create(
      <MeasurementDispatch.Provider value={mock}>
        <MeasureContent content={paragraph} style={style} />
      </MeasurementDispatch.Provider>,
    );

    renderer.root.findAllByType(Text)[0].props["onTextLayout"]({
      nativeEvent: { lines: [{ text: "abc" }] },
    });

    expect(mock).toHaveBeenCalledWith({
      payload: [{ text: "abc" }],
      id: paragraph.id,
      type: "SET_CONTENT_LINES",
    });
  });
});
