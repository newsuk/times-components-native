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

jest.mock("@times-components-native/front-page/MeasureContainer", () => {
  const MockMeasureContainer = ({ render }) => {
    return render({ height: 200, width: 200 });
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

  it("renders with more than 1 columns", () => {
    let renderer = ReactTestRenderer.create(
      <FrontTileSummary {...props} columnCount={2} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders with keyline", () => {
    let renderer = ReactTestRenderer.create(
      <FrontTileSummary {...props} showKeyline={true} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("shows front tile summary without content once headline/strapline/byline are measured", () => {
    let renderer = ReactTestRenderer.create(<FrontTileSummary {...props} />);

    ReactTestRenderer.act(() => {
      renderer.root
        .findByProps({
          testID: "headlineWrapper",
        })
        .props["onLayout"]({ nativeEvent: { layout: { height: 120 } } });

      renderer.root
        .findByProps({
          testID: "straplineWrapper",
        })
        .props["onLayout"]({ nativeEvent: { layout: { height: 40 } } });

      renderer.root
        .findByProps({
          testID: "bylineWrapper",
        })
        .props["onLayout"]({ nativeEvent: { layout: { height: 40 } } });
    });
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("shows front tile summary with content once headline/strapline/byline are measured", () => {
    let renderer = ReactTestRenderer.create(<FrontTileSummary {...props} />);

    ReactTestRenderer.act(() => {
      renderer.root
        .findByProps({
          testID: "headlineWrapper",
        })
        .props["onLayout"]({ nativeEvent: { layout: { height: 10 } } });

      renderer.root
        .findByProps({
          testID: "straplineWrapper",
        })
        .props["onLayout"]({ nativeEvent: { layout: { height: 10 } } });

      renderer.root
        .findByProps({
          testID: "bylineWrapper",
        })
        .props["onLayout"]({ nativeEvent: { layout: { height: 10 } } });
    });
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
