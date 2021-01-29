/* eslint-disable consistent-return */
import React, { Component, Fragment } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import ArticleError from "@times-components-native/article-error";
import ArticleSkeleton from "@times-components-native/article-skeleton";
import ArticleLeadAsset from "@times-components-native/article-lead-asset";
import { ResponsiveContext } from "@times-components-native/responsive";
import {
  getExtraImagesContent,
  getHeadline,
  getLeadAsset,
  getStandardTemplateCrop,
} from "@times-components-native/utils";
import { tabletWidth } from "@times-components-native/styleguide";
import Context from "@times-components-native/context";
import ArticleHeader from "./article-header/article-header";
import ArticleMeta from "./article-meta/article-meta";
import stylesFactory from "./styles/article-body";
import {
  articlePropTypes,
  articleDefaultProps,
} from "./article-prop-types/article-prop-types";

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader(parentProps) {
    const {
      article,
      onArticleRead,
      onAuthorPress,
      onImagePress,
      onTooltipPresented,
      onVideoPress,
      tooltips,
    } = this.props;
    const {
      bylines,
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
    const styles = stylesFactory();

    return (
      <ResponsiveContext.Consumer>
        {({ isTablet }) => {
          const leadAsset = (
            <View key="leadAsset" testID="leadAsset">
              <ArticleLeadAsset
                {...getLeadAsset(article)}
                getImageCrop={getStandardTemplateCrop}
                onImagePress={onImagePress}
                onVideoPress={onVideoPress}
                style={[styles.leadAsset, isTablet && styles.leadAssetTablet]}
                width={Math.min(parentProps.width, tabletWidth)}
                extraContent={getExtraImagesContent(article)}
              />
            </View>
          );
          const header = (
            <Fragment key="header">
              <ArticleHeader
                flags={expirableFlags}
                hasVideo={hasVideo}
                headline={getHeadline(headline, shortHeadline)}
                isTablet={isTablet}
                label={label}
                longRead={longRead}
                standfirst={standfirst}
              />
              <ArticleMeta
                bylines={bylines}
                isTablet={isTablet}
                onAuthorPress={onAuthorPress}
                onTooltipPresented={onTooltipPresented}
                publicationName={publicationName}
                publishedTime={publishedTime}
                tooltips={tooltips}
                articleId={article.id}
              />
            </Fragment>
          );
          return (
            <View
              style={
                isTablet && [
                  styles.articleMainContentRow,
                  styles.articleMainContentRowTablet,
                ]
              }
            >
              {isTablet ? [header, leadAsset] : [leadAsset, header]}
            </View>
          );
        }}
      </ResponsiveContext.Consumer>
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
      analyticsStream,
      article,
      interactiveConfig,
      onArticleRead,
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
      referralUrl,
      tooltips,
    } = this.props;

    return (
      <ResponsiveContext.Consumer>
        {({ isTablet }) => (
          <Context.Consumer>
            {({ theme: { scale, dropCapFont } }) => (
              <ArticleSkeleton
                adConfig={adConfig}
                analyticsStream={analyticsStream}
                data={article}
                dropCapFont={dropCapFont}
                Header={this.renderHeader}
                interactiveConfig={interactiveConfig}
                isTablet={isTablet}
                onArticleRead={onArticleRead}
                onAuthorPress={onAuthorPress}
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
                receiveChildList={receiveChildList}
                referralUrl={referralUrl}
                scale={scale}
                tooltips={tooltips}
              />
            )}
          </Context.Consumer>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

ArticlePage.propTypes = {
  ...articlePropTypes,
  interactiveConfig: PropTypes.shape({}),
  onArticleRead: PropTypes.func.isRequired,
  onAuthorPress: PropTypes.func.isRequired,
  onCommentGuidelinesPress: PropTypes.func.isRequired,
  onCommentsPress: PropTypes.func.isRequired,
  onImagePress: PropTypes.func,
  onLinkPress: PropTypes.func.isRequired,
  onTwitterLinkPress: PropTypes.func.isRequired,
  onVideoPress: PropTypes.func.isRequired,
  referralUrl: PropTypes.string,
  refetch: PropTypes.func.isRequired,
};
ArticlePage.defaultProps = {
  ...articleDefaultProps,
  interactiveConfig: {},
  onImagePress: null,
  referralUrl: null,
};

export default ArticlePage;
