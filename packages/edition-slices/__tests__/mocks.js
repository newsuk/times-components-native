jest.mock("../src/tiles", () => {
  const tileMocks = {};
  Object.keys(require.requireActual("../src/tiles")).forEach(key => {
    tileMocks[key] = key;
  });
  return tileMocks;
});
jest.mock("@tcn/article-flag", () => ({
  ArticleFlags: "ArticleFlags"
}));
jest.mock("@tcn/icons", () => ({
  IconStar: "IconStar",
  TheSTLogo: "TheSTLogo",
  TheTimesLogo: "TheTimesLogo"
}));
jest.mock("@tcn/image", () => "Image");
jest.mock("@tcn/link", () => "Link");
jest.mock("@tcn/gradient", () => "Gradient");
