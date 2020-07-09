// eslint-disable-next-line global-require
jest.mock("@tcn/ad", () => ({
  __esModule: "true",
  AdContainer: "AdContainer"
}));
jest.mock("@tcn/article-summary", () => ({
  __esModule: "true",
  default: "ArticleSummary",
  ArticleSummaryHeadline: "ArticleSummaryHeadline",
  ArticleSummaryContent: "ArticleSummaryContent"
}));
jest.mock("@tcn/button", () => "Button");
jest.mock("@tcn/card", () => "Card");
jest.mock("@tcn/image", () => "Image");
jest.mock("@tcn/link", () => "Link");
jest.mock("@tcn/pagination", () => "Pagination");
jest.mock("@tcn/tracking", () => {
  const mockTracking = component => component;
  return {
    withTrackEvents: mockTracking,
    withTrackingContext: mockTracking,
    withTrackScrollDepth: mockTracking
  };
});
jest.mock("@tcn/watermark", () => "Watermark");
