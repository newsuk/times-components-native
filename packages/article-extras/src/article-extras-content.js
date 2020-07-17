import React, { Fragment } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { ResponsiveContext } from "@times-components-native/responsive";
import ArticleComments from "@times-components-native/article-comments";
import RelatedArticles from "@times-components-native/related-articles";
import ArticleTopics from "./article-topics";
import styles from "./styles";

const ArticleExtrasContent = ({
  analyticsStream,
  article,
  articleId,
  articleUrl,
  onCommentGuidelinesPress,
  onCommentsPress,
  onRelatedArticlePress,
  onTopicPress,
  narrowContent
}) => {
  const {
    commentCount,
    commentsEnabled,
    relatedArticleSlice,
    topics
  } = article;

  return (
    <ResponsiveContext.Consumer>
      {({ isTablet }) => (
        <View style={[isTablet && styles.extrasTablet, narrowContent && styles.narrowContent]}>
          {relatedArticleSlice ? (
            <RelatedArticles
              analyticsStream={analyticsStream}
              onPress={onRelatedArticlePress}
              slice={relatedArticleSlice}
            />
          ) : null}
          {topics ? <ArticleTopics onPress={onTopicPress} topics={topics} narrowContent={narrowContent} /> : null}
          <ArticleComments
            articleId={articleId}
            commentCount={commentCount}
            commentsEnabled={commentsEnabled}
            onCommentGuidelinesPress={onCommentGuidelinesPress}
            onCommentsPress={onCommentsPress}
            url={articleUrl}
          />
        </View>
      )}
    </ResponsiveContext.Consumer>
  );
};

ArticleExtrasContent.propTypes = {
  analyticsStream: PropTypes.func.isRequired,
  article: PropTypes.shape({}).isRequired,
  articleId: PropTypes.string.isRequired,
  articleUrl: PropTypes.string.isRequired,
  onCommentGuidelinesPress: PropTypes.func.isRequired,
  onCommentsPress: PropTypes.func.isRequired,
  onRelatedArticlePress: PropTypes.func.isRequired,
  onTopicPress: PropTypes.func.isRequired
};

export default ArticleExtrasContent;
