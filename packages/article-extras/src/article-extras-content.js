import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { useResponsiveContext } from "@times-components-native/responsive";
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
  onTooltipPresented,
  onTopicPress,
  narrowContent,
  template,
  tooltips,
}) => {
  const { isTablet, narrowArticleBreakpoint } = useResponsiveContext();
  const isMobileMainStandard = !isTablet && template === "mainstandard";

  const {
    commentCount,
    commentsEnabled,
    relatedArticleSlice,
    topics,
  } = article;

  const getNarrowContentStyle = (width) => [styles.narrow, { width }];

  return (
    <View
      style={[
        isTablet && styles.extrasTablet,
        narrowContent && getNarrowContentStyle(narrowArticleBreakpoint.content),
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
      <ArticleComments
        articleId={articleId}
        commentCount={commentCount}
        commentsEnabled={commentsEnabled}
        narrowContent={narrowContent}
        onCommentGuidelinesPress={onCommentGuidelinesPress}
        onCommentsPress={onCommentsPress}
        onTooltipPresented={onTooltipPresented}
        tooltips={tooltips}
        url={articleUrl}
      />
      {(isTablet || isMobileMainStandard) && (
        <SponsoredAd
          numberOfAds={isMobileMainStandard ? 2 : narrowContent ? 3 : 4}
        />
      )}
    </View>
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
  template: PropTypes.string.isRequired,
  narrowContent: PropTypes.bool,
};

ArticleExtrasContent.defaultProps = {
  narrowContent: false,
};

export default ArticleExtrasContent;
