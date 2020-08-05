import FrontArticleSummaryContent from "@times-components-native/front-page/front-article-summary-content";
import React from "react";
import { ResponsiveContext } from "@times-components-native/responsive";
import TestRenderer from "react-test-renderer";

jest.mock("@times-components-native/article-summary", () => ({
  ArticleSummaryContent: "ArticleSummaryContent",
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

const component = (
  <FrontArticleSummaryContent
    whiteSpaceHeight={20}
    linesOfTeaserToRender={1}
    style={{ backgoundColor: "red" }}
    summary={ast}
    className={"some class name"}
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
