import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { hasBylineData } from "@times-components-native/article-byline";
import { ArticleFlags } from "@times-components-native/article-flag";
import { ModalImage } from "@times-components-native/image";
import Label from "../article-label/article-label";
import Meta from "../article-meta/article-meta";
import Standfirst from "../article-standfirst/article-standfirst";
import {
  articleHeaderPropTypes,
  articleHeaderDefaultProps,
} from "./article-header-prop-types";
import styles from "../styles";

const ArticleHeader = ({
  articleId,
  authorImage,
  bylines,
  flags,
  hasVideo,
  headline,
  label,
  longRead,
  onAuthorPress,
  onImagePress,
  publicationName,
  publishedTime,
  standfirst,
  tooltips,
}) => {
  const withBylineTooltip =
    hasBylineData(bylines) && tooltips.includes("profile");
  return (
    <View style={styles.header}>
      <View
        style={[
          styles.container,
          withBylineTooltip && styles.containerWithMargin,
        ]}
      >
        <ModalImage
          aspectRatio={1}
          imageStyles={styles.authorImage}
          uri={authorImage}
          onImagePress={onImagePress ? () => onImagePress(0) : undefined}
          rounded
          isSmallImage
        />
        <Label isVideo={hasVideo} label={label} />
        <Text style={styles.articleHeadline}>{headline}</Text>
        <ArticleFlags flags={flags} longRead={longRead} withContainer />
        <Standfirst standfirst={standfirst} />
        <Meta
          articleId={articleId}
          bylines={bylines}
          hasStandfirst={standfirst}
          onAuthorPress={onAuthorPress}
          publicationName={publicationName}
          publishedTime={publishedTime}
          tooltips={tooltips}
        />
      </View>
    </View>
  );
};

ArticleHeader.propTypes = {
  ...articleHeaderPropTypes,
  onAuthorPress: PropTypes.func.isRequired,
};

ArticleHeader.defaultProps = articleHeaderDefaultProps;

export default ArticleHeader;
