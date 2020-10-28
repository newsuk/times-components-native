import FrontArticleSummaryContent from "@times-components-native/front-page/front-article-summary-content";
import React from "react";
import TestRenderer from "react-test-renderer";
import MockMarkup from "@times-components-native/fixture-generator/src/mock-markup";

jest.mock("@times-components-native/article-summary", () => ({
  ArticleSummaryContent: "ArticleSummaryContent",
}));

jest.mock("@times-components-native/article-columns/article-columns", () => ({
  ArticleColumns: "ArticleColumns",
}));
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

const props = {
  bylines: bylines,
  whiteSpaceHeight: 20,
  justified: false,
  numberOfLines: 9,
  style: { backgoundColor: "red" },
  summary: ast,
  contentWidth: 100,
  contentHeight: 300,
};
describe("FrontArticleSummaryContent", () => {
  it("renders correctly", () => {
    const tree = TestRenderer.create(<FrontArticleSummaryContent {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with multiple columns", () => {
    const tree = TestRenderer.create(
      <FrontArticleSummaryContent {...props} columnCount={3} />,
    );
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with justified text", () => {
    const tree = TestRenderer.create(
      <FrontArticleSummaryContent {...props} justified={true} />,
    );
    expect(tree).toMatchSnapshot();
  });
});
