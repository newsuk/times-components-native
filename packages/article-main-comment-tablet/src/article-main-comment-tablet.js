/* eslint-disable consistent-return */

import React, { Component } from "react";
import { View } from "react-native";
import ArticleError from "@times-components-native/article-error";
import ArticleSkeleton from "@times-components-native/article-skeleton";
import { getHeadline } from "@times-components-native/utils";
import { ResponsiveContext } from "@times-components-native/responsive";
import Context from "@times-components-native/context";
import ArticleHeader from "./article-header/article-header";
import ArticleLeftColumn from "./article-left-column/article-left-column";
import {
  articlePropTypes,
  articleDefaultProps,
} from "./article-prop-types/article-prop-types";
import styles from "./styles";

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader() {
    const { article, onAuthorPress, onImagePress } = this.props;
    const {
      expirableFlags,
      hasVideo,
      headline,
      label,
      longRead,
      publicationName,
      publishedTime,
      shortHeadline,
      standfirst,
    } = article;

    return (
      <ArticleHeader
        flags={expirableFlags}
        hasVideo={hasVideo}
        headline={getHeadline(headline, shortHeadline)}
        label={label}
        longRead={longRead}
        onAuthorPress={onAuthorPress}
        onImagePress={onImagePress}
        publicationName={publicationName}
        publishedTime={publishedTime}
        standfirst={standfirst}
      />
    );
  }

  render() {
    const { error, refetch, isLoading } = this.props;

    if (error) {
      return <ArticleError refetch={refetch} />;
    }

    if (isLoading) {
      return null;
    }

    const {
      adConfig,
      adPosition,
      analyticsStream,
      article,
      interactiveConfig,
      onAuthorPress,
      onCommentGuidelinesPress,
      onCommentsPress,
      onImagePress,
      onLinkPress,
      onRelatedArticlePress,
      onTopicPress,
      onTwitterLinkPress,
      onVideoPress,
      onViewed,
      receiveChildList,
    } = this.props;

    const { bylines, topics } = article;
    console.log('topics:', topics);

    const authorImage =
      bylines &&
      bylines.length > 0 &&
      bylines[0].image &&
      Object.keys(bylines[0].image).length !== 0 &&
      bylines[0].image.crop
        ? bylines[0].image.crop.url
        : null;

    return (
      <ResponsiveContext.Consumer>
        {({ isTablet, narrowArticleBreakpoint }) => (
          <Context.Consumer>
            {({ theme: { scale, dropCapFont } }) => (
              <View
                style={[
                  styles.mainContainer,
                  { maxWidth: narrowArticleBreakpoint.container },
                ]}
              >
                <ArticleLeftColumn
                  authorImage={authorImage}
                  bylines={bylines}
                  onAuthorPress={onAuthorPress}
                  onImagePress={onImagePress}
                  onTopicPress={onTopicPress}
                  topics={topics}
                />
                <ArticleSkeleton
                  adConfig={adConfig}
                  adPosition={adPosition}
                  analyticsStream={analyticsStream}
                  data={article}
                  dropCapFont={dropCapFont}
                  Header={this.renderHeader}
                  interactiveConfig={interactiveConfig}
                  isTablet={isTablet}
                  onCommentGuidelinesPress={onCommentGuidelinesPress}
                  onCommentsPress={onCommentsPress}
                  onImagePress={onImagePress}
                  onLinkPress={onLinkPress}
                  onRelatedArticlePress={onRelatedArticlePress}
                  onTopicPress={onTopicPress}
                  onTwitterLinkPress={onTwitterLinkPress}
                  onVideoPress={onVideoPress}
                  onViewableItemsChanged={
                    onViewed ? this.onViewableItemsChanged : null
                  }
                  narrowContent={true}
                  receiveChildList={receiveChildList}
                  scale={scale}
                />
              </View>
            )}
          </Context.Consumer>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

ArticlePage.propTypes = articlePropTypes;
ArticlePage.defaultProps = articleDefaultProps;

export default ArticlePage;
