import FrontArticleSummaryContent from "@times-components-native/front-page/front-article-summary-content";
import React from "react";
import TestRenderer from "react-test-renderer";
import MockMarkup from "@times-components-native/fixture-generator/src/mock-markup";

jest.mock("@times-components-native/article-summary", () => ({
  ArticleSummaryContent: "ArticleSummaryContent",
}));

jest.mock("@times-components-native/front-page/MeasureContainer", () => {
  const MockMeasureContainer = ({ render }) => {
    return render({ height: 180, width: 200 });
  };
  return { MeasureContainer: MockMeasureContainer };
});

const ast = [
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

const bylines = new MockMarkup().addBylines().get();
const component = (
  <FrontArticleSummaryContent
    bylines={bylines}
    whiteSpaceHeight={20}
    template={"mainstandard"}
    linesOfTeaserToRender={1}
    style={{ backgoundColor: "red" }}
    summary={ast}
  />
);

describe("FrontArticleSummaryContent", () => {
  it("renders correctly", () => {
    const tree = TestRenderer.create(component);
    expect(tree).toMatchSnapshot();
  });
});
