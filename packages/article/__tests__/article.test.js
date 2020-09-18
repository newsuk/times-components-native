import React from "react";
import TestRenderer from "react-test-renderer";
import ArticleMainStandard from "@times-components-native/article-main-standard";
import ArticleMainComment from "@times-components-native/article-main-comment";
import ArticleMagazineStandard from "@times-components-native/article-magazine-standard";
import ArticleMagazineComment from "@times-components-native/article-magazine-comment";
import ArticleCommentTablet from "@times-components-native/article-comment-tablet";
import { ResponsiveContext } from "@times-components-native/responsive";
import Article from "../src/article";

jest.mock("@times-components-native/image", () => "TimesImage");

const requiredProps = {
  adConfig: {},
  analyticsStream: () => null,
  error: null,
  isLoading: false,
  onAuthorPress: () => null,
  onCommentGuidelinesPress: () => null,
  onCommentsPress: () => null,
  onLinkPress: () => null,
  onRelatedArticlePress: () => null,
  onTopicPress: () => null,
  onTwitterLinkPress: () => null,
  onVideoPress: () => null,
  onViewed: () => null,
  receiveChildList: () => null,
  refetch: () => null,
};

const withTabletContext = (WrappedComponent) => (
  <ResponsiveContext.Provider
    value={{
      narrowArticleBreakpoint: {
        container: 800,
        content: 600,
      },
      isTablet: true,
    }}
  >
    {WrappedComponent}
  </ResponsiveContext.Provider>
);

describe("Article", () => {
  it("renders with ArticleMainStandard as the default template if article is null", () => {
    const testRenderer = TestRenderer.create(
      <Article {...requiredProps} article={null} />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainStandard)).toBeTruthy();
  });

  it("renders with ArticleMainStandard as the default template if no template is provided", () => {
    const testRenderer = TestRenderer.create(
      <Article article={{}} {...requiredProps} />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainStandard)).toBeTruthy();
  });

  it("renders with ArticleMainStandard if an unknown template is chosen", () => {
    const testRenderer = TestRenderer.create(
      <Article article={{ template: "undefined" }} {...requiredProps} />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainStandard)).toBeTruthy();
  });

  it("renders with ArticleMainStandard as the default template if null is set for template", () => {
    const testRenderer = TestRenderer.create(
      <Article article={{ template: null }} {...requiredProps} />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainStandard)).toBeTruthy();
  });

  it("renders with ArticleMainStandard if the correct template is chosen", () => {
    const testRenderer = TestRenderer.create(
      <Article article={{ template: "mainstandard" }} {...requiredProps} />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainStandard)).toBeTruthy();
  });

  it("renders with ArticleMainComment if the correct template is chosen", () => {
    const testRenderer = TestRenderer.create(
      <Article article={{ template: "maincomment" }} {...requiredProps} />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainComment)).toBeTruthy();
  });

  it("renders with ArticleMagazineStandard if the correct template is chosen", () => {
    const testRenderer = TestRenderer.create(
      <Article article={{ template: "magazinestandard" }} {...requiredProps} />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMagazineStandard)).toBeTruthy();
  });

  it("renders with ArticleMagazineComment if the correct template is chosen", () => {
    const testRenderer = TestRenderer.create(
      <Article article={{ template: "magazinecomment" }} {...requiredProps} />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMagazineComment)).toBeTruthy();
  });

  it("renders with ArticleCommentTablet for the maincomment template on a tablet", () => {
    const testRenderer = TestRenderer.create(
      withTabletContext(
        <Article
          article={{ template: "maincomment" }}
          {...requiredProps}
          isTablet={true}
        />,
      ),
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleCommentTablet)).toBeTruthy();
  });

  it("renders with ArticleCommentTablet for the magazinecomment template on a tablet", () => {
    const testRenderer = TestRenderer.create(
      withTabletContext(
        <Article
          article={{ template: "magazinecomment" }}
          {...requiredProps}
          isTablet={true}
        />,
      ),
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleCommentTablet)).toBeTruthy();
  });
});
