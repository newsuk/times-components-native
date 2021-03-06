import { NativeModules } from "react-native";
import "./mock-track";
import trackArticle from "../src/article/track-article";

export default () => {
  it("article page view tracking calls onArticleLoaded only", () => {
    const {
      ArticleEvents: { onArticleLoaded },
      ReactAnalytics: { track },
    } = NativeModules;

    trackArticle({
      action: "Viewed",
      attrs: { articleId: "dummy-article-id" },
      object: "Article",
    });

    expect(onArticleLoaded).toHaveBeenCalled();
    expect(track).not.toHaveBeenCalled();
  });
};
