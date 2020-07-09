jest.mock("@tcn/article-flag", () => ({
  ArticleFlags: "ArticleFlags"
}));
jest.mock("@tcn/image", () => "Image");
jest.mock("@tcn/link", () => "Link");
jest.mock("@tcn/gradient", () => "Gradient");
jest.mock("@tcn/article-label", () => "ArticleLabel");
