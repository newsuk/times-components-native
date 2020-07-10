// eslint-disable-next-line import/prefer-default-export
export {
  setIsTablet,
  setDimension
} from "@tcn/mocks/dimensions";

jest.mock("NativeAnimatedHelper", () => "NativeAnimatedHelper", {
  virtual: true
});

jest.mock("../src/safeAreaView", () => "SafeAreaView");

jest.mock("@tcn/gradient", () => ({
  OverlayGradient: "OverlayGradient"
}));

// eslint-disable-next-line global-require
jest.mock("@tcn/svgs", () => require("./mock-svg"));

jest.mock("@tcn/utils", () => {
  // eslint-disable-next-line global-require
  const actualUtils = jest.requireActual("../../utils");

  return {
    ...actualUtils,
    convertToPixels: points => points - 1
  };
});
