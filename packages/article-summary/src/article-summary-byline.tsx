import ArticleByline from "@times-components-native/article-byline";
import React, { FC } from "react";
import { MarkAsRead } from "@times-components-native/article-summary/src/article-summary";

export interface ArticleSummaryBylineProps {
  articleReadState: {
    read: boolean;
    animate: boolean;
  };
  ast: any;
}

const ArticleSummaryByline: FC<ArticleSummaryBylineProps> = (props) => {
  const { ast, articleReadState } = props;

  if (!ast || ast.length === 0) return null;

  const Byline = <ArticleByline {...props} />;

  if (!articleReadState) return Byline;

  return <MarkAsRead articleReadState={articleReadState}>{Byline}</MarkAsRead>;
};

export default ArticleSummaryByline;
