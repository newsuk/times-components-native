import { ArticleContent } from "@times-components-native/article-columns/domain-types";

export const appendInvisibleLineToArticleContent = (
  content: ArticleContent,
): ArticleContent =>
  content.name === "paragraph"
    ? {
        ...content,
        children: [
          ...content.children,
          {
            name: "invisible",
            attributes: { value: "____________________________________" },
            children: [],
          },
        ],
      }
    : content;
