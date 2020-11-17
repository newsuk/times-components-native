import React from "react";
import { View, Text } from "react-native";
import TestRenderer from "react-test-renderer";

import { InnerMeasureInlineContent } from "../../src/measure/MeasureInlineContent";
import { initialState } from "../../src/measure/reducer";
import {
  ArticleContent,
  ParagraphContent,
} from "@times-components-native/types";
import { ContentParameters } from "../../src/types";

jest.mock("../../src/measure/MeasureInlineComponents", () => ({
  MeasureContent: "MeasureContent",
  MeasureItem: "MeasureItem",
}));

const createParagraphWithText = (
  text: string,
  testData: Partial<ParagraphContent> = {},
): ParagraphContent => ({
  id: "some-paragraph-id",
  name: "paragraph",
  children: [{ name: "text", children: [], attributes: { value: text } }],
  ...testData,
});

const paragraphA: ArticleContent = createParagraphWithText("line1", {
  id: "p1",
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CaptureContents = ({ contentMeasurements }: any) => (
  <View>
    <Text>{JSON.stringify(contentMeasurements)}</Text>
  </View>
);

const contentParameters: ContentParameters = {
  contentHeight: 2000,
  contentWidth: 429,
  contentLineHeight: 26,
  itemWidth: 231,
};

describe("MeasureInlineContent", () => {
  it("renders content to be measured", () => {
    const renderer = TestRenderer.create(
      <InnerMeasureInlineContent
        contentParameters={contentParameters}
        content={[paragraphA]}
        renderMeasuredContents={() => null}
        skeletonProps={{ some: "props" }}
        measurementState={initialState}
        itemProps={undefined}
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("outputs rendered content once everything has been measured", () => {
    const renderer = TestRenderer.create(
      <InnerMeasureInlineContent
        contentParameters={contentParameters}
        content={[paragraphA]}
        renderMeasuredContents={(contentMeasurements) => (
          <CaptureContents contentMeasurements={contentMeasurements} />
        )}
        skeletonProps={{ some: "props" }}
        measurementState={{
          ...initialState,
          contents: {
            lines: { p1: [{ text: "line1" }] },
            heights: { p1: 20 },
          },
        }}
        itemProps={undefined}
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders content with inline item to be measured", () => {
    const renderer = TestRenderer.create(
      <InnerMeasureInlineContent
        contentParameters={contentParameters}
        content={[paragraphA]}
        renderMeasuredContents={() => null}
        skeletonProps={{ some: "props" }}
        measurementState={initialState}
        itemProps={{
          caption: "some caption",
          children: [{ string: "some pull quote text" }],
          onTwitterLinkPress: () => {
            return;
          },
          originalName: "pullQuote",
          text: "some text",
          twitter: "some twitter text",
          width: 231,
        }}
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("outputs rendered content with inline item once everything has been measured", () => {
    const renderer = TestRenderer.create(
      <InnerMeasureInlineContent
        contentParameters={contentParameters}
        content={[paragraphA]}
        renderMeasuredContents={(contentMeasurements) => (
          <CaptureContents contentMeasurements={contentMeasurements} />
        )}
        skeletonProps={{ some: "props" }}
        measurementState={{
          contents: {
            lines: { p1: [{ text: "line1" }] },
            heights: { p1: 20 },
          },
          itemHeight: 300,
        }}
        itemProps={{
          caption: "some caption",
          children: [{ string: "some pull quote text" }],
          onTwitterLinkPress: () => {
            return;
          },
          originalName: "pullQuote",
          text: "some text",
          twitter: "some twitter text",
          width: 429,
        }}
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
