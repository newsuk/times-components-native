import React from "react";
import { Text, View } from "react-native";
import { ArticleFlags } from "@times-components-native/article-flag";
import Label from "../article-label/article-label";
import Meta from "../article-meta/article-meta";
import Standfirst from "../article-standfirst/article-standfirst";
import {
  articleHeaderPropTypes,
  articleHeaderDefaultProps,
} from "./article-header-prop-types";
import styles from "../styles";

const ArticleHeader = ({
  flags,
  hasVideo,
  headline,
  label,
  longRead,
  publicationName,
  publishedTime,
  standfirst,
}) => (
  <View style={styles.header}>
    <View style={styles.container}>
      <Label isVideo={hasVideo} label={label} />
      <Text style={styles.articleHeadline}>{headline}</Text>
      <ArticleFlags flags={flags} longRead={longRead} withContainer />
      <Standfirst standfirst={standfirst} />
      <Meta
        hasStandfirst={standfirst}
        publicationName={publicationName}
        publishedTime={publishedTime}
      />
    </View>
  </View>
);

ArticleHeader.propTypes = {
  ...articleHeaderPropTypes,
};

ArticleHeader.defaultProps = articleHeaderDefaultProps;

export default ArticleHeader;
