import ReactTestRenderer from "react-test-renderer";
import React from "react";
import { FrontTileSummary } from "@times-components-native/front-page";
import { MockTile } from "@times-components-native/fixture-generator";

jest.mock(
  "../front-article-summary-content",
  () => "FrontArticleSummaryContent",
);
jest.mock("@times-components-native/article-summary", () => ({
  ArticleSummaryHeadline: "ArticleSummaryHeadline",
  ArticleSummaryStrapline: "ArticleSummaryStrapline",
}));

jest.mock("@times-components-native/article-byline", () => "ArticleByline");

const summaryContent = [
  {
    attributes: {},
    children: [
      {
        attributes: {
          value: "Test",
        },
        children: [],
        name: "text",
      },
    ],
    name: "paragraph",
  },
];

const bylines = [
  {
    byline: [
      {
        foo: "bar",
      },
    ],
  },
];

const props = {
  summary: summaryContent,
  tile: new MockTile().get(),
  whiteSpaceHeight: 40,
  bylines: bylines,
  linesOfTeaserToRender: 2,
  containerStyle: { backgroundColor: "red" },
  headlineStyle: { backgroundColor: "blue" },
  straplineStyle: { backgroundColor: "green" },
  strapline: "Strapline Text",
  columnCount: 3,
  summaryStyle: { backgroundColor: "orange" },
};

describe("FrontTileSummary", () => {
  it("renders correctly", () => {
    let renderer = ReactTestRenderer.create(<FrontTileSummary {...props} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders without byline", () => {
    let renderer = ReactTestRenderer.create(
      <FrontTileSummary {...props} bylines={undefined} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders without strapline", () => {
    let renderer = ReactTestRenderer.create(
      <FrontTileSummary {...props} strapline={undefined} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
