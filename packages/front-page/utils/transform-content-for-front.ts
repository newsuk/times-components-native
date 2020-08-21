import { ArticleContent } from "@times-components-native/article-columns/domain-types";
import { hyphenateArticleContent } from "@times-components-native/utils/src/hyphenate-article-content";
import { Markup } from "@times-components-native/fixture-generator/src/types";

const addTab = (content: ArticleContent, index: number): Markup => {
  if (content.name !== "paragraph") return content;

  const addTab = index > 0;
  return { ...content, attributes: { ...content.attributes, tab: addTab } };
};

export const indent = (contents: Markup[]) => contents.map(addTab);

export const transformContentForFront = (contents: ArticleContent[]) => {
  const hyphenatedContent = hyphenateArticleContent(contents);
  return indent(hyphenatedContent);
};
