import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { ArticleFlags } from "@times-components-native/article-flag";
import { ModalImage } from "@times-components-native/image";
import { useResponsiveContext } from "@times-components-native/responsive";
import Label from "../article-label/article-label";
import Meta from "../article-meta/article-meta";
import Standfirst from "../article-standfirst/article-standfirst";
import {
  articleHeaderPropTypes,
  articleHeaderDefaultProps,
} from "./article-header-prop-types";
import styles from "../styles";

const ArticleHeader = ({
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
}) => {
  const { isArticleTablet } = useResponsiveContext();
  return (
    <View style={[styles.header, isArticleTablet && styles.headerTablet]}>
      <View
        style={[styles.container, isArticleTablet && styles.containerTablet]}
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
        <Text
          style={[
            styles.articleHeadline,
            isArticleTablet && styles.articleHeadlineTablet,
          ]}
        >
          {headline}
        </Text>
        <ArticleFlags flags={flags} longRead={longRead} withContainer />
        <Standfirst standfirst={standfirst} />
        <Meta
          bylines={bylines}
          hasStandfirst={standfirst}
          isArticleTablet={isArticleTablet}
          onAuthorPress={onAuthorPress}
          publicationName={publicationName}
          publishedTime={publishedTime}
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
