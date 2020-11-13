import React from "react";
import { ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { ArticleExtrasProvider } from "@times-components-native/provider";
import ArticleExtrasError from "./article-extras-error";
import ArticleExtrasContent from "./article-extras-content";

const ArticleExtras = ({
  analyticsStream,
  articleId,
  articleUrl,
  onRelatedArticlePress,
  onTopicPress,
  onCommentGuidelinesPress,
  onCommentsPress,
  onTooltipPresented,
  narrowContent,
  template,
  tooltips,
}) => (
  <ArticleExtrasProvider debounceTimeMs={0} id={articleId}>
    {({ article, error, isLoading, refetch }) => {
      if (isLoading) {
        return <ActivityIndicator size="large" />;
      }
      if (error) {
        return <ArticleExtrasError refetch={refetch} />;
      }

      return (
        <ArticleExtrasContent
          analyticsStream={analyticsStream}
          article={article}
          articleId={articleId}
          articleUrl={articleUrl}
          onCommentGuidelinesPress={onCommentGuidelinesPress}
          onCommentsPress={onCommentsPress}
          onRelatedArticlePress={onRelatedArticlePress}
          onTopicPress={onTopicPress}
          onTooltipPresented={onTooltipPresented}
          narrowContent={narrowContent}
          template={template}
          tooltips={tooltips}
        />
      );
    }}
  </ArticleExtrasProvider>
);

ArticleExtras.propTypes = {
  analyticsStream: PropTypes.func.isRequired,
  articleId: PropTypes.string.isRequired,
  articleUrl: PropTypes.string.isRequired,
  onCommentGuidelinesPress: PropTypes.func.isRequired,
  onCommentsPress: PropTypes.func.isRequired,
  onRelatedArticlePress: PropTypes.func.isRequired,
  onTopicPress: PropTypes.func.isRequired,
  template: PropTypes.string.isRequired,
  narrowContent: PropTypes.bool,
};

ArticleExtras.defaultProps = {
  narrowContent: false,
};

export default ArticleExtras;
