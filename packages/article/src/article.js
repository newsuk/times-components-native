import React from "react";
import ArticleMagazineComment from "@times-components-native/article-magazine-comment";
import ArticleInDepth from "@times-components-native/article-in-depth";
import ArticleMagazineStandard from "@times-components-native/article-magazine-standard";
import ArticleMainStandard from "@times-components-native/article-main-standard";
import ArticleMainComment from "@times-components-native/article-main-comment";
import ArticleMainCommentTablet from "@times-components-native/article-main-comment-tablet";
import { scales } from "@times-components-native/styleguide";
import { MessageManager } from "@times-components-native/message-bar";
import { getMediaList, addIndexesToInlineImages } from "./utils";

export const getComponentByTemplate = (template, isTablet) => {
  const templates = {
    indepth: ArticleInDepth,
    magazinecomment: isTablet
      ? ArticleMainCommentTablet
      : ArticleMagazineComment,
    magazinestandard: ArticleMagazineStandard,
    maincomment: isTablet ? ArticleMainCommentTablet : ArticleMainComment,
    mainstandard: ArticleMainStandard,
  };

  return templates[template] || ArticleMainStandard;
};

export class TakeoverBailout extends Error {
  constructor(message) {
    super(message);
    this.name = "TakeoverBailout";
  }
}

const Article = (props) => {
  const { article, onImagePress, isTablet } = props;
  const { leadAsset, template } = article || {};

  let { content } = article || {};
  if (template === "takeoverpage") {
    throw new TakeoverBailout("Aborted react render: Takeover page");
  }
  let onImagePressArticle = null;
  if (onImagePress) {
    content = addIndexesToInlineImages(content, leadAsset);
    const mediaList = getMediaList(content, leadAsset);
    onImagePressArticle = (index) => onImagePress(index, mediaList);
  }
  const Component = getComponentByTemplate(template, isTablet);
  const newProps = {
    ...props,
    article: {
      ...article,
      template: article && article.template ? article.template : "mainstandard",
    },
  };

  return (
    <MessageManager animate delay={3000} scale={scales.medium}>
      <Component {...newProps} onImagePress={onImagePressArticle} />
    </MessageManager>
  );
};

export default Article;
