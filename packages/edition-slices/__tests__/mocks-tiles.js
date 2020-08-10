jest.mock("@times-components-native/article-flag", () => ({
  ArticleFlags: "ArticleFlags",
}));
jest.mock("@times-components-native/image", () => "Image");
jest.mock("@times-components-native/link", () => "Link");
jest.mock("@times-components-native/gradient", () => "Gradient");
jest.mock("@times-components-native/article-label", () => "ArticleLabel");
jest.mock("@times-components-native/front-page", () => ({
  FrontTileSummary: "FrontTileSummary",
}));
