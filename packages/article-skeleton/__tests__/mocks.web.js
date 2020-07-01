/* eslint-disable import/prefer-default-export */
import { mockUserState } from "@times-components-native/user-state";

export const UserState = mockUserState();

jest.mock("../src/head.web", () => "Head");

// eslint-disable-next-line global-require
jest.mock("@times-components-native/ad", () => ({
  __esModule: true,
  AdContainer: "AdContainer"
}));
jest.mock("@times-components-native/article-byline", () => ({
  ArticleBylineWithLinks: "ArticleBylineWithLinks",
  hasBylineData: () => true
}));
jest.mock("@times-components-native/article-extras", () => "ArticleExtras");
jest.mock("@times-components-native/article-flag", () => ({
  ExclusiveArticleFlag: "ExclusiveArticleFlag",
  NewArticleFlag: "NewArticleFlag",
  SponsoredArticleFlag: "SponsoredArticleFlag",
  UpdatedArticleFlag: "UpdatedArticleFlag"
}));
jest.mock("@times-components-native/article-image", () => "ArticleImage");
jest.mock("@times-components-native/article-topics", () => "ArticleTopics");
jest.mock("@times-components-native/caption", () => "Caption");
jest.mock("@times-components-native/date-publication", () => "DatePublication");
jest.mock("@times-components-native/image", () => "Image");
jest.mock(
  "@times-components-native/interactive-wrapper",
  () => "InteractiveWrapper"
);
jest.mock("@times-components-native/key-facts", () => "KeyFacts");
jest.mock("@times-components-native/link", () => ({
  __esModule: true,
  default: "Link",
  TextLink: "TextLink"
}));
jest.mock("@times-components-native/pull-quote", () => "PullQuote");
jest.mock("@times-components-native/related-articles", () => "RelatedArticles");
jest.mock("@times-components-native/video-label", () => "VideoLabel");
jest.mock("@times-components-native/sticky", () => {
  const actualSticky = jest.requireActual("@times-components-native/sticky");
  const { css } = jest.requireActual("styled-components");

  function mockComputeProgressStyles(computer) {
    return css`
      &[MOCK-PROGRESS-SELECTOR] {
        ${computer(0.05)};
      }
    `;
  }

  return {
    __esModule: true,
    ...actualSticky,
    computeProgressStyles: mockComputeProgressStyles,
    PROGRESS_ATTR_NAME: "MOCK-PROGRESS-SELECTOR"
  };
});
