import {
  mockNativeModules,
  MockArticleSkeleton
} from "@tcn/mocks";

// eslint-disable-next-line import/prefer-default-export
export { setIsTablet } from "@tcn/mocks/dimensions";

// eslint-disable-next-line global-require
jest.mock("@tcn/ad", () => require("./ad-mock"));
jest.mock("@tcn/article-byline", () => ({
  ArticleBylineWithLinks: "ArticleBylineWithLinks",
  hasBylineData: () => true
}));
jest.mock("@tcn/article-extras", () => "ArticleExtras");
jest.mock("@tcn/article-error", () => "ArticleError");
jest.mock("@tcn/article-flag", () => ({
  ArticleFlags: "ArticleFlags",
  getActiveFlags: flags => flags
}));
jest.mock("@tcn/article-image", () => "ArticleImage");
jest.mock("@tcn/article-label", () => "ArticleLabel");
jest.mock("@tcn/article-topics", () => "ArticleTopics");
jest.mock(
  "@tcn/article-skeleton",
  () => MockArticleSkeleton
);
jest.mock("@tcn/button", () => "Button");
jest.mock("@tcn/article-byline", () => {
  const actual = jest.requireActual("@tcn/article-byline");
  return {
    __esModule: true,
    default: "ArticleByline",
    hasBylineData: actual.hasBylineData,
    ArticleBylineWithLinks: "ArticleBylineWithLinks"
  };
});
jest.mock("@tcn/image", () => ({
  __esModule: true,
  default: "Image",
  ModalImage: "ModalImage"
}));
jest.mock("@tcn/pull-quote", () => "PullQuote");
jest.mock("@tcn/related-articles", () => "RelatedArticles");
jest.mock("@tcn/watermark", () => "Watermark");
jest.mock("@tcn/video", () => "Video");
jest.mock("@tcn/video-label", () => "VideoLabel");

mockNativeModules();
