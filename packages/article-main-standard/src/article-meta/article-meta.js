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
  isArticleTablet,
  bylines,
  publicationName,
  publishedTime,
  onAuthorPress,
  onTooltipPresented,
  tooltips,
  articleId,
}) {
  return (
    <View
      style={[styles.articleMeta, isArticleTablet && styles.articleMetaTablet]}
    >
      {hasBylineData(bylines) && (
        <View style={styles.articleMetaElementWithBorder}>
          <View style={styles.datePublication}>
            <ArticleBylineWithLinks
              ast={bylines}
              onAuthorPress={onAuthorPress}
              onTooltipPresented={onTooltipPresented}
              tooltipArrowOffset={30}
              tooltips={tooltips}
              tooltipOffsetX={-20}
              tooltipOffsetY={26}
              articleId={articleId}
            />
          </View>
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
