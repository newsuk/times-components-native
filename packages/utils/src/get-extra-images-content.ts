import { ArticleContent } from "@times-components-native/types";

type Article = {
  content: ArticleContent[];
};

export const getExtraImagesContent = (article: Article) => {
  if (!article || !article.content) {
    return [];
  }

  return article.content.filter((c) => c.name === "image");
};
