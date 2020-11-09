import React from "react";
import TestRenderer from "react-test-renderer";
import ArticleMainStandard from "@times-components-native/article-main-standard";
import ArticleMainComment from "@times-components-native/article-main-comment";
import ArticleMagazineStandard from "@times-components-native/article-magazine-standard";
import ArticleMagazineComment from "@times-components-native/article-magazine-comment";
import ArticleCommentTablet from "@times-components-native/article-comment-tablet";
import Article from "../src/article";
import {
  withMobileContext,
  withTabletContext,
} from "@times-components-native/test-utils";

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

describe("Article", () => {
  it("renders with ArticleMainStandard as the default template if article is null", () => {
    const testRenderer = TestRenderer.create(
      withMobileContext(<Article {...requiredProps} article={null} />),
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainStandard)).toBeTruthy();
  });

  it("renders with ArticleMainStandard as the default template if no template is provided", () => {
    const testRenderer = TestRenderer.create(
      withMobileContext(<Article article={{}} {...requiredProps} />),
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainStandard)).toBeTruthy();
  });

  it("renders with ArticleMainStandard if an unknown template is chosen", () => {
    const testRenderer = TestRenderer.create(
      withMobileContext(
        <Article article={{ template: "undefined" }} {...requiredProps} />,
      ),
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainStandard)).toBeTruthy();
  });

  it("renders with ArticleMainStandard as the default template if null is set for template", () => {
    const testRenderer = TestRenderer.create(
      withMobileContext(
        <Article article={{ template: null }} {...requiredProps} />,
      ),
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainStandard)).toBeTruthy();
  });

  it("renders with ArticleMainStandard if the correct template is chosen", () => {
    const testRenderer = TestRenderer.create(
      withMobileContext(
        <Article article={{ template: "mainstandard" }} {...requiredProps} />,
      ),
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainStandard)).toBeTruthy();
  });

  it("renders with ArticleMainComment if the correct template is chosen", () => {
    const testRenderer = TestRenderer.create(
      withMobileContext(
        <Article article={{ template: "maincomment" }} {...requiredProps} />,
      ),
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMainComment)).toBeTruthy();
  });

  it("renders with ArticleMagazineStandard if the correct template is chosen", () => {
    const testRenderer = TestRenderer.create(
      withMobileContext(
        <Article
          article={{ template: "magazinestandard" }}
          {...requiredProps}
        />,
      ),
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ArticleMagazineStandard)).toBeTruthy();
  });

  it("renders with ArticleMagazineComment if the correct template is chosen", () => {
    const testRenderer = TestRenderer.create(
      withMobileContext(
        <Article
          article={{ template: "magazinecomment" }}
          {...requiredProps}
        />,
      ),
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
