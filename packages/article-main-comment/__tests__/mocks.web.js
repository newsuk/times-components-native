/* eslint-disable import/prefer-default-export */
import { mockUserState } from "@times-components-native/user-state";

export const UserState = mockUserState();

jest.mock("react-helmet-async", () => ({ Helmet: "Helmet" }));
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
  ArticleFlags: "ArticleFlags"
}));
jest.mock("@times-components-native/article-image", () => "ArticleImage");
jest.mock("@times-components-native/article-topics", () => "ArticleTopics");
jest.mock("@times-components-native/caption", () => "Caption");
jest.mock("@times-components-native/date-publication", () => "DatePublication");
jest.mock("@times-components-native/image", () => "Image");
jest.mock("@times-components-native/link", () => "Link");
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
