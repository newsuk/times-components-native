/* eslint-disable consistent-return */

import React, { Component } from "react";
import { View } from "react-native";
import ArticleError from "@times-components-native/article-error";
import ArticleSkeleton from "@times-components-native/article-skeleton";
import {
  getHeadline,
  getLeadAsset,
  getStandardTemplateCrop,
} from "@times-components-native/utils";
import ArticleLeadAsset from "@times-components-native/article-lead-asset";
import { ResponsiveContext } from "@times-components-native/responsive";
import Caption from "@times-components-native/caption";
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
    const { article, onAuthorPress, onImagePress, onVideoPress } = this.props;
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
      template,
    } = article;
    const showLeadAsset = template === "magazinecomment";

    return (
      <>
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
        {showLeadAsset && (
          <ArticleLeadAsset
            {...getLeadAsset(article)}
            getImageCrop={getStandardTemplateCrop}
            onImagePress={onImagePress}
            onVideoPress={onVideoPress}
            renderCaption={({ caption }) => (
              <Caption {...caption} style={styles.captionContainer} />
            )}
            style={styles.leadAssetContainer}
          />
        )}
      </>
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
      onTooltipPresented,
      onTopicPress,
      onTwitterLinkPress,
      onVideoPress,
      onViewed,
      receiveChildList,
      tooltips,
    } = this.props;

    const { bylines, topics } = article;

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
                <View style={styles.contentContainer}>
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
                    onTooltipPresented={onTooltipPresented}
                    onTopicPress={onTopicPress}
                    onTwitterLinkPress={onTwitterLinkPress}
                    onVideoPress={onVideoPress}
                    onViewableItemsChanged={
                      onViewed ? this.onViewableItemsChanged : null
                    }
                    narrowContent={true}
                    receiveChildList={receiveChildList}
                    scale={scale}
                    tooltips={tooltips}
                  />
                </View>
                <ArticleLeftColumn
                  authorImage={authorImage}
                  bylines={bylines}
                  onAuthorPress={onAuthorPress}
                  onImagePress={onImagePress}
                  onTopicPress={onTopicPress}
                  topics={topics}
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
