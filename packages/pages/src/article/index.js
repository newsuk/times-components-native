import React from "react";
import PropTypes from "prop-types";
import { Linking, NativeModules } from "react-native";
import ArticleBase from "./article-base";
import { propTypes, defaultProps } from "./article-prop-types";
import withNativeProvider from "../with-native-provider";
import { withErrorBoundaries } from "../with-error-boundaries";

const { refetch: refetchArticle } = NativeModules.ArticleEvents;

const ArticlePage = (props) => {
  const { article, articleId, error } = props;
  const data = article ? JSON.parse(article).data.article : null;
  const openInBrowser = (data || {}).url
    ? () => Linking.openURL(data.url)
    : undefined;

  const ArticlePageView = withErrorBoundaries(
    withNativeProvider(
      <ArticleBase
        {...props}
        article={article ? JSON.parse(article).data.article : null}
        error={error ? { message: error } : null}
        refetch={() => refetchArticle(articleId)}
      />,
    ),
    {
      message: "We can't load the article you have requested.",
      buttonText: "Open in browser",
      onAction: openInBrowser,
    },
  );

  return <ArticlePageView />;
};
ArticlePage.propTypes = {
  ...propTypes,
  article: PropTypes.string,
  error: PropTypes.string,
};
ArticlePage.defaultProps = defaultProps;

export default ArticlePage;
