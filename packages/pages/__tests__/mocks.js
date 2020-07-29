// eslint-disable-next-line global-require
jest.mock("@times-components-native/article", () => "Article");
jest.mock("react-native", () => {
  const rn = require.requireActual("react-native");
  rn.NativeModules.ArticleEvents = {
    onArticleLoaded: () => null,
    onArticlePress: () => null,
    onAuthorPress: () => null,
    onCommentGuidelinesPress: () => null,
    onCommentsPress: () => null,
    onLinkPress: () => null,
    onTopicPress: () => null,
    onVideoPress: () => null,
    refetch: () => null,
  };
  rn.NativeModules.AuthorProfileEvents = {
    onArticlePress: () => null,
  };
  rn.NativeModules.NativeFetch = { fetch: () => null };
  rn.NativeModules.ReactAnalytics = {
    track: () => null,
    componentCaughtError: () => null,
  };
  rn.NativeModules.ReactConfig = {
    adNetworkId: "dummy-ad-network-id",
    cookieEid: "dummy-cookie-eid",
    deviceId: "dummy-device-id",
    graphqlEndPont: "dummy-end-point",
    operatingSystemVersion: "123",
  };
  rn.NativeModules.SectionEvents = {
    getOpenedPuzzleCount: jest.fn(),
    getSavedArticles: jest.fn().mockReturnValue(Promise.resolve([])),
    getSectionData: jest.fn().mockReturnValue(Promise.resolve("{}")),
    onArticlePress: () => null,
    onArticleSavePress: jest.fn().mockReturnValue(Promise.resolve(true)),
    onPuzzleBarPress: () => null,
    onPuzzlePress: () => null,
    onSectionLoaded: () => null,
  };
  rn.NativeModules.TopicEvents = {
    onArticlePress: () => null,
  };
  return rn;
});
