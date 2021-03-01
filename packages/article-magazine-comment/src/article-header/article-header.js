import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { ArticleFlags } from "@times-components-native/article-flag";
import { ModalImage } from "@times-components-native/image";
import Context from "@times-components-native/context";
import { fontFactory } from "@times-components-native/styleguide";

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
  isArticleTablet,
  label,
  longRead,
  onAuthorPress,
  publicationName,
  publishedTime,
  standfirst,
}) => (
  <Context.Consumer>
    {({ theme: { headlineFont, headlineCase } }) => (
      <View
        style={[styles.container, isArticleTablet && styles.containerTablet]}
      >
        <View
          style={[
            styles.authorImage,
            isArticleTablet && styles.authorImageTablet,
          ]}
        >
          <ModalImage aspectRatio={1} uri={authorImage} rounded />
        </View>
        <Label isVideo={hasVideo} label={label} />
        <Text
          style={[
            styles.articleHeadline,
            {
              ...fontFactory({
                font: headlineFont || "headline",
                fontSize: isArticleTablet ? "pageHeadline" : "headline",
              }),
            },
            headlineCase ? { textTransform: headlineCase } : null,
          ]}
        >
          {headline}
        </Text>
        <ArticleFlags flags={flags} longRead={longRead} withContainer />
        <Standfirst standfirst={standfirst} />
        <Meta
          bylines={bylines}
          hasElementsAbove={flags.length > 0 || standfirst}
          isArticleTablet={isArticleTablet}
          onAuthorPress={onAuthorPress}
          publicationName={publicationName}
          publishedTime={publishedTime}
        />
      </View>
    )}
  </Context.Consumer>
);

ArticleHeader.propTypes = {
  ...articleHeaderPropTypes,
  onAuthorPress: PropTypes.func.isRequired,
};

ArticleHeader.defaultProps = articleHeaderDefaultProps;

export default ArticleHeader;
