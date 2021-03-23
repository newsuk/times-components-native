/* eslint-disable consistent-return */

import React, { Component, Fragment } from "react";
import ArticleError from "@times-components-native/article-error";
import ArticleSkeleton from "@times-components-native/article-skeleton";
import {
  getHeadline,
  getLeadAsset,
  getCropByPriority,
} from "@times-components-native/utils";
import { CentredCaption } from "@times-components-native/caption";
import ArticleLeadAsset from "@times-components-native/article-lead-asset";
import Context from "@times-components-native/context";
import ArticleHeader from "./article-header/article-header";
import {
  articlePropTypes,
  articleDefaultProps,
} from "./article-prop-types/article-prop-types";
import styles from "./styles";

class ArticleMagazineComment extends Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader({ width }) {
    const {
      article,
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

    const authorImage =
      bylines &&
      bylines.length > 0 &&
      bylines[0].image &&
      Object.keys(bylines[0].image).length !== 0 &&
      bylines[0].image.crop
        ? bylines[0].image.crop.url
        : null;

    return (
      <Fragment>
        <ArticleHeader
          articleId={article.id}
          authorImage={authorImage}
          bylines={bylines}
          flags={expirableFlags}
          hasVideo={hasVideo}
          headline={getHeadline(headline, shortHeadline)}
          label={label}
          longRead={longRead}
          onAuthorPress={onAuthorPress}
          onTooltipPresented={onTooltipPresented}
          publicationName={publicationName}
          publishedTime={publishedTime}
          standfirst={standfirst}
          tooltips={tooltips}
        />
        <ArticleLeadAsset
          {...getLeadAsset(article)}
          getImageCrop={getCropByPriority}
          onImagePress={onImagePress}
          onVideoPress={onVideoPress}
          renderCaption={({ caption }) => <CentredCaption {...caption} />}
          style={styles.leadAssetContainer}
          width={width}
        />
      </Fragment>
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
      tooltips,
    } = this.props;

    return (
      <Context.Consumer>
        {({ theme: { scale, dropCapFont } }) => (
          <ArticleSkeleton
            adConfig={adConfig}
            analyticsStream={analyticsStream}
            data={article}
            Header={this.renderHeader}
            interactiveConfig={interactiveConfig}
            dropCapFont={dropCapFont}
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
            scale={scale}
            tooltips={tooltips}
          />
        )}
      </Context.Consumer>
    );
  }
}

ArticleMagazineComment.propTypes = articlePropTypes;
ArticleMagazineComment.defaultProps = articleDefaultProps;

export default ArticleMagazineComment;
