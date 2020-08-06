import React from "react";
import PropTypes from "prop-types";
import { Linking, NativeModules } from "react-native";

import { ArticleProvider } from "@times-components-native/provider";
import { propTypes, defaultProps } from "./article-prop-types";
import { withErrorBoundaries } from "../with-error-boundaries";
import ArticleBase from "./article-base";
import withNativeProvider from "../with-native-provider";

const { refetch: refetchArticle } = NativeModules.ArticleEvents;

const ArticlePage = (props) => {
  const { article, articleId, error } = props;
  const data = article ? JSON.parse(article).data.article : null;
  const openInBrowser = (data || {}).url
    ? () => Linking.openURL(data.url)
    : undefined;
  const errorBoundaryOptions = {
    message: "We can't load the article you have requested.",
    buttonText: "Open in browser",
    onAction: openInBrowser,
  };

  if (article || error) {
    const ArticlePageView = withErrorBoundaries(
      withNativeProvider(
        <ArticleBase
          {...props}
          article={article ? JSON.parse(article).data.article : null}
          error={error ? { message: error } : null}
          refetch={() => refetchArticle(articleId)}
        />,
      ),
      errorBoundaryOptions,
    );

    return <ArticlePageView />;
  }

  const ArticlePageView = withErrorBoundaries(
    withNativeProvider(
      <ArticleProvider debounceTimeMs={100} id={articleId}>
        {({ article: articleData, isLoading, error: errorData, refetch }) => (
          <ArticleBase
            {...props}
            article={articleData}
            error={errorData}
            isLoading={isLoading}
            refetch={refetch}
          />
        )}
      </ArticleProvider>,
    ),
    errorBoundaryOptions,
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
