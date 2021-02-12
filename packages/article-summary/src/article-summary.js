import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";
import PropTypes from "prop-types";
import ArticleByline, {
  ArticleBylineOpinion,
  articleBylinePropTypes,
} from "@times-components-native/article-byline";
import ArticleLabel from "@times-components-native/article-label";
import VideoLabel from "@times-components-native/video-label";
import DatePublication from "@times-components-native/date-publication";
import renderTrees from "@times-components-native/markup-forest";
import { ARTICLE_READ_ANIMATION } from "@times-components-native/styleguide";
import ArticleSummaryContent from "./article-summary-content";
import ArticleSummaryHeadline from "./article-summary-headline";
import ArticleSummaryStrapline from "./article-summary-strapline";
import renderer from "./article-summary-renderer";
import styles from "./styles";
import summarise from "./summarise";

function renderAst(ast) {
  return renderTrees(summarise(ast), renderer);
}

function ArticleSummaryLabel(props) {
  const { articleReadState, hide, title, isVideo } = props;
  const labelOpacity = useRef(new Animated.Value(1)).current;
  const articleReadOpacity = 0.6;

  useEffect(() => {
    Animated.timing(labelOpacity, {
      delay: ARTICLE_READ_ANIMATION.delay,
      duration: ARTICLE_READ_ANIMATION.duration,
      toValue: articleReadOpacity,
      useNativeDriver: true,
    }).start();
  }, [articleReadState]);

  if (hide || (!title && !isVideo)) {
    return null;
  }

  const Label = (
    <View style={styles.labelWrapper}>
      {isVideo ? <VideoLabel {...props} /> : <ArticleLabel {...props} />}
    </View>
  );

  return articleReadState.animate ? (
    <Animated.View
      style={{
        opacity: labelOpacity,
      }}
    >
      {Label}
    </Animated.View>
  ) : articleReadState.read ? (
    <View
      style={{
        opacity: articleReadOpacity,
      }}
    >
      {Label}
    </View>
  ) : (
    Label
  );
}

function Byline(props) {
  const { ast, isOpinionByline, bylineClass } = props;

  if (!ast || ast.length === 0) return null;

  const BylineComponent = isOpinionByline
    ? ArticleBylineOpinion
    : ArticleByline;

  return (
    <Text>
      <BylineComponent {...props} className={bylineClass} />
    </Text>
  );
}

function ArticleSummary(props) {
  const {
    bylineProps,
    content,
    datePublicationProps,
    flags,
    headline,
    labelProps,
    style,
    strapline,
    saveStar,
  } = props;

  const { isOpinionByline = false } = bylineProps || {};
  const byline = bylineProps ? <Byline {...bylineProps} /> : null;

  return (
    <View style={style}>
      {labelProps ? <ArticleSummaryLabel {...labelProps} /> : null}
      {isOpinionByline && byline}
      {headline}
      {strapline}
      {flags}
      {content}
      {saveStar}
      {datePublicationProps ? (
        <Text style={styles.metaText} testID="datePublication">
          <DatePublication {...datePublicationProps} />
        </Text>
      ) : null}
      {!isOpinionByline && byline}
    </View>
  );
}

ArticleSummary.propTypes = {
  bylineProps: PropTypes.shape({
    ...articleBylinePropTypes,
    bylineClass: PropTypes.string,
    isOpinionByline: PropTypes.bool,
  }),
  content: PropTypes.node,
  datePublicationProps: PropTypes.shape({
    date: PropTypes.string,
    publication: PropTypes.string,
  }),
  flags: PropTypes.node,
  headline: PropTypes.node,
  labelProps: PropTypes.shape({
    color: PropTypes.string,
    isVideo: PropTypes.bool,
    title: PropTypes.string,
    hide: PropTypes.bool,
    articleReadState: PropTypes.shape({
      read: PropTypes.bool,
      animate: PropTypes.bool,
    }),
  }),
  saveStar: PropTypes.node,
  strapline: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

ArticleSummary.defaultProps = {
  bylineProps: null,
  content: null,
  datePublicationProps: null,
  flags: null,
  headline: null,
  labelProps: {
    hide: false,
    markAsRead: {
      read: false,
      animate: false,
    },
  },
  saveStar: null,
  strapline: null,
  style: null,
};

export {
  ArticleSummaryContent,
  ArticleSummaryHeadline,
  ArticleSummaryLabel,
  ArticleSummaryStrapline,
  renderAst,
  renderer,
  summarise,
};

export default ArticleSummary;
