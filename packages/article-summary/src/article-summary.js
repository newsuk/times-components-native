import React, { useState } from "react";
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
  const { markAsRead, hide, title, isVideo } = props;
  const [labelOpacity] = useState(new Animated.Value(1));

  if (hide || (!title && !isVideo)) {
    return null;
  }

  Animated.timing(labelOpacity, {
    duration: 500,
    toValue: markAsRead ? 0.6 : 1,
    useNativeDriver: false,
  }).start();

  return (
    <Animated.View
      style={{
        opacity: labelOpacity,
      }}
    >
      <View style={styles.labelWrapper}>
        {isVideo ? <VideoLabel {...props} /> : <ArticleLabel {...props} />}
      </View>
    </Animated.View>
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
    markAsRead: PropTypes.bool,
  }),
  saveStar: PropTypes.node,
  strapline: PropTypes.node,
  style: PropTypes.shape({}),
};

ArticleSummary.defaultProps = {
  bylineProps: null,
  content: null,
  datePublicationProps: null,
  flags: null,
  headline: null,
  labelProps: {
    hide: false,
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
