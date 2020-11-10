import React from "react";
import PropTypes from "prop-types";
import { Linking, NativeModules } from "react-native";

import { ArticleProvider } from "@times-components-native/provider";
import Responsive from "@times-components-native/responsive";
import { propTypes, defaultProps } from "./article-prop-types";
import { withErrorBoundaries } from "../with-error-boundaries";
import ArticleBase from "./article-base";
import withNativeProvider from "../with-native-provider";

const { refetch: refetchArticle } = NativeModules.ArticleEvents;

const ArticlePage = (props) => {
  const {
    article,
    articleId,
    error,
    displayHeight,
    displayWidth,
    fontScale,
  } = props;
  const data = article ? JSON.parse(article).data.article : null;
  const openInBrowser = (data || {}).url
    ? () => Linking.openURL(data.url)
    : undefined;
  const errorBoundaryOptions = {
    title: "View online",
    message: "This article will display on the web",
    buttonText: "Open in browser",
    onAction: openInBrowser,
  };

  if (article || error) {
    const ArticlePageView = withErrorBoundaries(
      withNativeProvider(
        <Responsive
          fontScale={fontScale}
          displayHeight={displayHeight}
          displayWidth={displayWidth}
        >
          <ArticleBase
            {...props}
            article={article ? JSON.parse(article).data.article : null}
            error={error ? { message: error } : null}
            refetch={() => refetchArticle(articleId)}
          />
        </Responsive>,
      ),
      errorBoundaryOptions,
    );

    return <ArticlePageView />;
  }

  const ArticlePageView = withErrorBoundaries(
    withNativeProvider(
      <ArticleProvider debounceTimeMs={100} id={articleId}>
        {({ article: articleData, isLoading, error: errorData, refetch }) => (
          <Responsive
            fontScale={fontScale}
            displayHeight={displayHeight}
            displayWidth={displayWidth}
          >
            <ArticleBase
              {...props}
              article={articleData}
              error={errorData}
              isLoading={isLoading}
              refetch={refetch}
            />
          </Responsive>
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
