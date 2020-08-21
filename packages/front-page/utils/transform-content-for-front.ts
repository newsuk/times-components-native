import { ArticleContent } from "@times-components-native/article-columns/domain-types";
import { hyphenateArticleContent } from "@times-components-native/utils/src/hyphenate-article-content";
import {
  Markup,
  TemplateType,
} from "@times-components-native/fixture-generator/src/types";

const addTab = (content: ArticleContent, index: number): Markup => {
  if (content.name !== "paragraph") return content;

  return { ...content, attributes: { ...content.attributes, tab: index > 0 } };
};

export const indent = (contents: Markup[]) => contents.map(addTab);

export const transformContentForFront = (
  contents: ArticleContent[],
  template: TemplateType,
) => {
  const hyphenatedContent =
    template === "maincomment" ? contents : hyphenateArticleContent(contents);
  return indent(hyphenatedContent);
};
