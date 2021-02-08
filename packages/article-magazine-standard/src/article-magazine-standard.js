/* eslint-disable consistent-return */

import React, { Component } from "react";
import { View } from "react-native";
import ArticleError from "@times-components-native/article-error";
import ArticleSkeleton from "@times-components-native/article-skeleton";
import {
  getExtraImagesContent,
  getHeadline,
  getLeadAsset,
  getStandardTemplateCrop,
} from "@times-components-native/utils";
import { CentredCaption } from "@times-components-native/caption";
import { ResponsiveContext } from "@times-components-native/responsive";
import { tabletWidth } from "@times-components-native/styleguide";
import LeadAsset from "@times-components-native/article-lead-asset";
import Context from "@times-components-native/context";
import ArticleHeader from "./article-header/article-header";
import {
  articlePropTypes,
  articleDefaultProps,
} from "./article-prop-types/article-prop-types";
import styles from "./styles";

class ArticleMagazineStandard extends Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader({ width }) {
    const {
      article,
      onAuthorPress,
      onImagePress,
      onVideoPress,
      onTooltipPresented,
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

    return (
      <ResponsiveContext.Consumer>
        {({ isTablet }) => (
          <View>
            <ArticleHeader
              bylines={bylines}
              flags={expirableFlags}
              hasVideo={hasVideo}
              headline={getHeadline(headline, shortHeadline)}
              isTablet={isTablet}
              label={label}
              longRead={longRead}
              onAuthorPress={onAuthorPress}
              onTooltipPresented={onTooltipPresented}
              publicationName={publicationName}
              publishedTime={publishedTime}
              standfirst={standfirst}
              tooltips={tooltips}
            />
            <LeadAsset
              {...getLeadAsset(article)}
              getImageCrop={getStandardTemplateCrop}
              onImagePress={onImagePress}
              onVideoPress={onVideoPress}
              renderCaption={({ caption }) => <CentredCaption {...caption} />}
              style={[
                styles.leadAssetContainer,
                isTablet && styles.leadAssetContainerTablet,
                isTablet && styles.tabletContainer,
                { zIndex: 0 },
              ]}
              width={Math.min(width, tabletWidth)}
              extraContent={getExtraImagesContent(article)}
            />
          </View>
        )}
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

ArticleMagazineStandard.propTypes = articlePropTypes;
ArticleMagazineStandard.defaultProps = articleDefaultProps;

export default ArticleMagazineStandard;
