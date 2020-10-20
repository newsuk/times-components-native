import ReactTestRenderer from "react-test-renderer";
import React from "react";
import FrontTileSummary from "../front-tile-summary";
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
jest.mock("@times-components-native/front-page/front-page-byline", () => ({
  FrontPageByline: "FrontPageByline",
}));

const mockContainerHeight = 200;
jest.mock("@times-components-native/front-page/MeasureContainer", () => {
  const MockMeasureContainer = ({ render }) => {
    return render({ height: mockContainerHeight, width: 200 });
  };
  return { MeasureContainer: MockMeasureContainer };
});

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
  template: "mainstandard",
  summaryStyle: { backgroundColor: "orange" },
  headlineMarginBottom: 10,
  straplineMarginBottom: 20,
  bylineMarginBottom: 15,
  summaryLineHeight: 20,
};

const simulateMeasurement = (
  renderer,
  { headlineHeight = 20, straplineHeight = 20, bylineHeight = 20 },
) => {
  ReactTestRenderer.act(() => {
    renderer.root
      .findByProps({
        testID: "headlineWrapper",
      })
      .props["onLayout"]({
        nativeEvent: { layout: { height: headlineHeight } },
      });

    renderer.root
      .findByProps({
        testID: "straplineWrapper",
      })
      .props["onLayout"]({
        nativeEvent: { layout: { height: straplineHeight } },
      });

    renderer.root
      .findByProps({
        testID: "bylineWrapper",
      })
      .props["onLayout"]({ nativeEvent: { layout: { height: bylineHeight } } });
  });
};

describe("FrontTileSummary", () => {
  it("performs measurements before rendering front tile summary", () => {
    let renderer = ReactTestRenderer.create(<FrontTileSummary {...props} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("shows front tile summary with headline only after measurement has been taken", () => {
    let renderer = ReactTestRenderer.create(<FrontTileSummary {...props} />);
    simulateMeasurement(renderer, {
      headlineHeight: mockContainerHeight,
      bylineHeight: 20,
      straplineHeight: 20,
    });

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("shows front tile summary with headline/strapline/byline/content after measurement has been taken", () => {
    let renderer = ReactTestRenderer.create(<FrontTileSummary {...props} />);
    simulateMeasurement(renderer, {
      headlineHeight: 20,
      bylineHeight: 20,
      straplineHeight: 20,
    });
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders with a missing byline", () => {
    let renderer = ReactTestRenderer.create(
      <FrontTileSummary {...props} bylines={undefined} />,
    );

    simulateMeasurement(renderer, {
      headlineHeight: 20,
      bylineHeight: 0,
      straplineHeight: 20,
    });

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders with a missing strapline", () => {
    let renderer = ReactTestRenderer.create(
      <FrontTileSummary {...props} strapline={undefined} />,
    );

    simulateMeasurement(renderer, {
      headlineHeight: 20,
      bylineHeight: 20,
      straplineHeight: 0,
    });

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders with 2 columns", () => {
    let renderer = ReactTestRenderer.create(
      <FrontTileSummary {...props} columnCount={2} />,
    );

    simulateMeasurement(renderer, {
      headlineHeight: 20,
      bylineHeight: 20,
      straplineHeight: 20,
    });

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders byline with keyline", () => {
    let renderer = ReactTestRenderer.create(
      <FrontTileSummary {...props} showKeyline={true} />,
    );

    simulateMeasurement(renderer, {
      headlineHeight: 20,
      bylineHeight: 20,
      straplineHeight: 20,
    });

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
