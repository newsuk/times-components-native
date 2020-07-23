import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { ResponsiveContext } from "@times-components-native/responsive";
import ArticleComments from "@times-components-native/article-comments";
import RelatedArticles from "@times-components-native/related-articles";
import ArticleTopics from "./article-topics";
import styles from "./styles";
import { SponsoredAd } from "@times-components-native/ad";

const ArticleExtrasContent = ({
  analyticsStream,
  article,
  articleId,
  articleUrl,
  onCommentGuidelinesPress,
  onCommentsPress,
  onRelatedArticlePress,
  onTopicPress,
  narrowContent,
}) => {
  const {
    commentCount,
    commentsEnabled,
    relatedArticleSlice,
    topics,
  } = article;

  const getNarrowContentStyle = (width) => [styles.narrow, { width }];

  return (
<<<<<<< HEAD
    <ResponsiveContext.Consumer>
      {({ isTablet, narrowArticleBreakpoint }) => (
        <View
          style={[
            isTablet && styles.extrasTablet,
            narrowContent &&
              getNarrowContentStyle(narrowArticleBreakpoint.content),
          ]}
        >
          {relatedArticleSlice ? (
            <RelatedArticles
              analyticsStream={analyticsStream}
              onPress={onRelatedArticlePress}
              slice={relatedArticleSlice}
            />
          ) : null}
          {topics && !narrowContent ? (
            <ArticleTopics
              onPress={onTopicPress}
              topics={topics}
              narrowContent={narrowContent}
            />
          ) : null}
          <ResponsiveContext.Consumer>
            {({ isTablet }) => isTablet && <SponsoredAd />}
          </ResponsiveContext.Consumer>
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
=======
    <Fragment>
      {relatedArticleSlice ? (
        <ResponsiveContext.Consumer>
          {({ isTablet }) => (
            <View style={isTablet && styles.relatedArticlesTablet}>
              <RelatedArticles
                analyticsStream={analyticsStream}
                onPress={onRelatedArticlePress}
                slice={relatedArticleSlice}
              />
            </View>
          )}
        </ResponsiveContext.Consumer>
      ) : null}
      {topics ? <ArticleTopics onPress={onTopicPress} topics={topics} /> : null}
      <ResponsiveContext.Consumer>
        {({ isTablet }) => isTablet && <SponsoredAd />}
      </ResponsiveContext.Consumer>
      <ArticleComments
        articleId={articleId}
        commentCount={commentCount}
        commentsEnabled={commentsEnabled}
        onCommentGuidelinesPress={onCommentGuidelinesPress}
        onCommentsPress={onCommentsPress}
        url={articleUrl}
      />
    </Fragment>
>>>>>>> master
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
  onTopicPress: PropTypes.func.isRequired,
  narrowContent: PropTypes.bool,
};

ArticleExtrasContent.defaultProps = {
  narrowContent: false,
};

export default ArticleExtrasContent;
