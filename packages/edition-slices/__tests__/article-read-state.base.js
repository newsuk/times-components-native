import { getArticleReadState } from "../src/tiles/shared/article-summary";
// eslint-disable-next-line global-require
jest.mock("react-native", () => {
  const rn = require.requireActual("react-native");
  rn.NativeModules.SectionEvents = {
    addListener: jest.fn(),
  };
  return rn;
});

export default () => {
  describe("getArticleReadState", () => {
    test("returns correct value when readArticles is null", () => {
      expect(getArticleReadState(false, null, "foo")).toEqual({
        read: false,
        animate: false,
      });
    });
    test("returns correct value when readArticles is empty array", () => {
      expect(getArticleReadState(false, [], "foo")).toEqual({
        read: false,
        animate: false,
      });
    });
    test("returns correct value when readArticles are set and isTablet is false", () => {
      expect(
        getArticleReadState(
          false,
          [
            {
              id: "foo",
              highlight: false,
            },
          ],
          "foo",
        ),
      ).toEqual({
        read: false,
        animate: false,
      });
    });
    test("returns correct value when readArticles are set and isTablet is true but id doesn't match", () => {
      expect(
        getArticleReadState(
          true,
          [
            {
              id: "foo",
              highlight: false,
            },
          ],
          "bar",
        ),
      ).toEqual({
        read: false,
        animate: false,
      });
    });
    test("returns correct value when readArticles are set and isTablet is true and id matches", () => {
      expect(
        getArticleReadState(
          true,
          [
            {
              id: "bar",
              highlight: false,
            },
          ],
          "bar",
        ),
      ).toEqual({
        read: true,
        animate: false,
      });
    });
    test("returns correct value when readArticles are set and isTablet is true, id matches and highlight is set", () => {
      expect(
        getArticleReadState(
          true,
          [
            {
              id: "bar",
              highlight: true,
            },
          ],
          "bar",
        ),
      ).toEqual({
        read: true,
        animate: true,
      });
    });
  });
};
