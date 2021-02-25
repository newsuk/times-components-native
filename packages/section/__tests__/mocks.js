// eslint-disable-next-line global-require
jest.mock("react-native", () => {
  const rn = require.requireActual("react-native");
  rn.NativeModules.SectionEvents = {
    addListener: jest.fn(),
    getOpenedPuzzleCount: jest.fn(),
    getSavedArticles: jest.fn().mockReturnValue(Promise.resolve([])),
    getSectionData: jest.fn().mockReturnValue(Promise.resolve("{}")),
    onArticlePress: () => null,
    onArticleSavePress: jest.fn().mockReturnValue(Promise.resolve(true)),
    onPuzzleBarPress: () => null,
    onPuzzlePress: () => null,
    onSectionLoaded: () => null,
  };
  return rn;
});
