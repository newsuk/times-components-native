import React, { useRef, useEffect } from "react";
import { Animated, Platform, Text, View } from "react-native";
import PropTypes from "prop-types";
import ArticleByline, {
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

const MarkAsRead = ({ children, articleReadState }) => {
  const animationOpacity = useRef(new Animated.Value(1)).current;
  const opacity = 0.57;

  useEffect(() => {
    if (!articleReadState.animate) return;

    Animated.timing(animationOpacity, {
      delay: ARTICLE_READ_ANIMATION.DELAY,
      duration: ARTICLE_READ_ANIMATION.DURATION,
      toValue: opacity,
      useNativeDriver: Platform.OS === "ios",
    }).start();
  }, [articleReadState.animate]);

  return articleReadState.animate ? (
    <Animated.View
      style={{
        opacity: animationOpacity,
      }}
    >
      {children}
    </Animated.View>
  ) : articleReadState.read ? (
    <View
      style={{
        opacity: opacity,
      }}
    >
      {children}
    </View>
  ) : (
    <View>{children}</View>
  );
};

function ArticleSummaryLabel(props) {
  const { articleReadState, hide, title, isVideo } = props;

  if (hide || (!title && !isVideo)) {
    return null;
  }

  return (
    <MarkAsRead articleReadState={articleReadState} title={title}>
      <View style={styles.labelWrapper}>
        {isVideo ? <VideoLabel {...props} /> : <ArticleLabel {...props} />}
      </View>
    </MarkAsRead>
  );
}

function ArticleSummaryByline(props) {
  const { ast, articleReadState, bylineClass } = props;

  if (!ast || ast.length === 0) return null;

  return (
    <MarkAsRead articleReadState={articleReadState}>
      <ArticleByline {...props} className={bylineClass} />
    </MarkAsRead>
  );
}

function ArticleSummary(props) {
  const {
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
  } = props;

  const { bylineOnTop = false } = bylineProps || {};

  const byline = bylineProps ? (
    <Text>
      <ArticleSummaryByline
        {...bylineProps}
        articleReadState={articleReadState}
      />
    </Text>
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
      {flags}
      {content}
      {saveStar}
      {datePublicationProps ? (
        <Text style={styles.metaText} testID="datePublication">
          <DatePublication {...datePublicationProps} />
        </Text>
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
  MarkAsRead,
  renderAst,
  renderer,
  summarise,
};

export default ArticleSummary;
