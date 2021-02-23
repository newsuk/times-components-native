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

// eslint-disable-next-line global-require
jest.mock("react-native", () => {
  const rn = require.requireActual("react-native");
  rn.NativeModules.SectionEvents = {
    addListener: jest.fn(),
  };
  return rn;
});
