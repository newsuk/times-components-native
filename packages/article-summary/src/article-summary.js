import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { articleBylinePropTypes } from "@times-components-native/article-byline";
import DatePublication from "@times-components-native/date-publication";

import ArticleSummaryContent from "./article-summary-content";
import ArticleSummaryHeadline from "./article-summary-headline";
import ArticleSummaryStrapline from "./article-summary-strapline";
import renderer from "./article-summary-renderer";
import styles from "./styles";
import summarise from "./summarise";
import ArticleSummaryByline from "./article-summary-byline";
import ArticleSummaryLabel from "./article-summary-label";
import Read from "@times-components-native/read";

function ArticleSummary({
  articleReadState,
  bylineProps,
  content,
  datePublicationProps,
  flags,
  headline,
  labelProps,
  style,
  strapline,
  saveStar,
  center = false,
}) {
  const { bylineOnTop = false } = bylineProps || {};

  const byline = bylineProps ? (
    <ArticleSummaryByline
      {...bylineProps}
      articleReadState={articleReadState}
    />
  ) : null;

  return (
    <View style={style}>
      {labelProps ? (
        <ArticleSummaryLabel
          {...labelProps}
          articleReadState={articleReadState}
        />
      ) : null}
      {bylineOnTop && byline}
      {headline}
      {strapline}
      {!articleReadState.read && flags}
      {articleReadState.read && (
        <Read
          containerStyle={{ justifyContent: center ? "center" : "flex-start" }}
        />
      )}
      {content}
      {saveStar}
      {datePublicationProps ? (
        <DatePublication style={styles.metaText} {...datePublicationProps} />
      ) : null}
      {!bylineOnTop && byline}
    </View>
  );
}

ArticleSummary.propTypes = {
  articleReadState: PropTypes.shape({
    read: PropTypes.bool,
    animationOpacity: PropTypes.bool,
  }),
  bylineProps: PropTypes.shape({
    ...articleBylinePropTypes,
    bylineClass: PropTypes.string,
    bylineOnTop: PropTypes.bool,
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
  articleReadState: {
    read: false,
    animate: false,
  },
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
  renderer,
  summarise,
};

export default ArticleSummary;
