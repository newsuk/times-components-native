import React from "react";
import { Text, View } from "react-native";
import {
  ArticleBylineWithLinks,
  hasBylineData,
} from "@times-components-native/article-byline";
import DatePublication from "@times-components-native/date-publication";

import { defaultProps, propTypes } from "./article-meta-prop-types";
import styles from "../styles/article-meta";

function ArticleMeta({
  articleId,
  isArticleTablet,
  bylines,
  publicationName,
  publishedTime,
  onAuthorPress,
  onTooltipPresented,
  tooltips,
}) {
  console.log("isArticleTablet", isArticleTablet);
  return (
    <View style={[styles.articleMeta]}>
      {hasBylineData(bylines) && (
        <View style={styles.articleMetaElementWithBorder}>
          <View style={styles.datePublication}></View>
        </View>
      )}
      <View
        style={
          hasBylineData(bylines)
            ? styles.articleMetaElement
            : styles.articleMetaElementWithBorder
        }
      >
        <Text style={styles.datePublication}>
          <DatePublication date={publishedTime} publication={publicationName} />
        </Text>
      </View>
    </View>
  );
}

ArticleMeta.propTypes = propTypes;
ArticleMeta.defaultProps = defaultProps;

export default ArticleMeta;
