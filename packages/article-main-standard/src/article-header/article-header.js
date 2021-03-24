import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import {
  ArticleFlags,
  getActiveFlags,
} from "@times-components-native/article-flag";

import HeaderLabel from "../article-header-label/article-header-label";
import HeaderStandfirst from "./article-header-standfirst";
import styles from "../styles/article-header";

const ArticleHeader = ({
  flags,
  hasVideo,
  headline,
  isArticleTablet,
  label,
  longRead,
  standfirst,
}) => {
  const hasActiveFlags = getActiveFlags(flags).length > 0;

  return (
    <View
      style={[
        styles.articleMainContentRow,
        isArticleTablet && styles.articleMainContentRowTablet,
        isArticleTablet && styles.headerTablet,
      ]}
    >
      <HeaderLabel isVideo={hasVideo} label={label} />
      <Text
        selectable
        style={[
          styles.articleHeadLineText,
          !(hasActiveFlags || longRead || standfirst) &&
            styles.articleHeadlineSpacer,
          isArticleTablet && styles.articleHeadLineTextTablet,
        ]}
      >
        {headline}
      </Text>
      <HeaderStandfirst
        hasFlags={hasActiveFlags || longRead}
        standfirst={standfirst}
      />
      {(hasActiveFlags || longRead) && (
        <View style={styles.flags}>
          <ArticleFlags flags={flags} longRead={longRead} />
        </View>
      )}
    </View>
  );
};

ArticleHeader.propTypes = {
  flags: PropTypes.arrayOf(PropTypes.string),
  hasVideo: PropTypes.bool,
  headline: PropTypes.string.isRequired,
  isArticleTablet: PropTypes.bool,
  label: PropTypes.string,
  longRead: PropTypes.bool,
  standfirst: PropTypes.string,
};

ArticleHeader.defaultProps = {
  flags: [],
  hasVideo: false,
  isArticleTablet: false,
  label: null,
  longRead: false,
  standfirst: null,
};

export default ArticleHeader;
