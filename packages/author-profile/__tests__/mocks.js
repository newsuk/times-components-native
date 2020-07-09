jest.mock("react-helmet-async", () => ({ Helmet: "Helmet" }));

jest.mock("@tcn/article-list", () =>
  // eslint-disable-next-line global-require
  require("./mock-article-list")
);
jest.mock("@tcn/gradient", () => "Gradient");
jest.mock("@tcn/icons", () => ({
  IconTwitter: "IconTwitter"
}));
jest.mock("@tcn/image", () => "Image");
jest.mock("@tcn/link", () => ({
  TextLink: "TextLink"
}));
jest.mock("@tcn/pagination", () => {
  const id = x => x;

  return {
    withPageState: id
  };
});
