import ReactTestRenderer from "react-test-renderer";
import { ResponsiveContext } from "@times-components-native/responsive";
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

const withResponsiveContext = (WrappedComponent, editionBreakpoint) => (
  <ResponsiveContext.Provider
    value={{
      editionBreakpoint,
      orientation: "landscape",
    }}
  >
    {WrappedComponent}
  </ResponsiveContext.Provider>
);

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
  summaryStyle: { backgroundColor: "orange" },
};

describe("FrontTileSummary", () => {
  it("renders correctly", () => {
    let renderer = ReactTestRenderer.create(
      withResponsiveContext(<FrontTileSummary {...props} />, "medium"),
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders without byline", () => {
    let renderer = ReactTestRenderer.create(
      withResponsiveContext(
        <FrontTileSummary {...props} bylines={undefined} />,
        "medium",
      ),
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders without strapline", () => {
    let renderer = ReactTestRenderer.create(
      withResponsiveContext(
        <FrontTileSummary {...props} strapline={undefined} />,
        "medium",
      ),
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
