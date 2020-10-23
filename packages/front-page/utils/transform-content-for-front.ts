import { ArticleContent } from "@times-components-native/types";
import { hyphenateArticleContent } from "@times-components-native/utils/src/hyphenate-article-content";
import { Markup } from "@times-components-native/fixture-generator/src/types";

const addTab = (content: ArticleContent, index: number): Markup => {
  if (content.name !== "paragraph") return content;

  return { ...content, attributes: { ...content.attributes, tab: index > 0 } };
};

export const indent = (contents: Markup[]) => contents.map(addTab);

export const transformContentForFront = (
  contents: ArticleContent[],
  justified: boolean,
) => {
  const hyphenatedContent = justified
    ? hyphenateArticleContent(contents)
    : contents;
  return indent(hyphenatedContent);
};
