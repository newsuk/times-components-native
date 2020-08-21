import FrontArticleSummaryContent from "@times-components-native/front-page/front-article-summary-content";
import React from "react";
import { ResponsiveContext } from "@times-components-native/responsive";
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

const withResponsiveContext = (
  WrappedComponent,
  editionBreakpoint,
  orientation,
) => (
  <ResponsiveContext.Provider
    value={{
      editionBreakpoint,
      orientation,
    }}
  >
    {WrappedComponent}
  </ResponsiveContext.Provider>
);

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
  describe("landscape", () => {
    it("medium", () => {
      const tree = TestRenderer.create(
        withResponsiveContext(component, "medium", "landscape"),
      );
      expect(tree).toMatchSnapshot();
    });

    it("wide", () => {
      const tree = TestRenderer.create(
        withResponsiveContext(component, "wide", "landscape"),
      );
      expect(tree).toMatchSnapshot();
    });

    it("huge", () => {
      const tree = TestRenderer.create(
        withResponsiveContext(component, "huge", "landscape"),
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe("portrait", () => {
    it("medium", () => {
      const tree = TestRenderer.create(
        withResponsiveContext(component, "medium", "portrait"),
      );
      expect(tree).toMatchSnapshot();
    });

    it("wide", () => {
      const tree = TestRenderer.create(
        withResponsiveContext(component, "wide", "portrait"),
      );
      expect(tree).toMatchSnapshot();
    });

    it("huge", () => {
      const tree = TestRenderer.create(
        withResponsiveContext(component, "huge", "portrait"),
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
