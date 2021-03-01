/* eslint-env jest */

export default () => {
  jest.mock("react-native", () => {
    const rn = require.requireActual("react-native");
    rn.NativeModules.ReactConfig = { timezone: "Europe/London" };
    rn.NativeModules.ArticleEvents = {
      addListener: jest.fn(),
    };
    rn.NativeModules.SectionEvents = {
      addListener: jest.fn(),
    };
    return rn;
  });
};
