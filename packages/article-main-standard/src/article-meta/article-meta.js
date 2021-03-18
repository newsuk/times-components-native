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
  isTablet,
  bylines,
  publicationName,
  publishedTime,
  onAuthorPress,
  onTooltipPresented,
  tooltips,
}) {
  const withBylineTooltip =
    hasBylineData(bylines) && ["profile"].includes("profile");
  return (
    <View
      style={[
        styles.articleMeta,
        isTablet && styles.articleMetaTablet,
        !isTablet && withBylineTooltip && styles.articleMetaWidthMargin,
      ]}
    >
      {hasBylineData(bylines) && (
        <View style={styles.articleMetaElementWithBorder}>
          <View style={styles.datePublication}>
            <ArticleBylineWithLinks
              articleId={articleId}
              ast={bylines}
              onAuthorPress={onAuthorPress}
              onTooltipPresented={onTooltipPresented}
              tooltipArrowOffset={isTablet ? 130 : 120}
              tooltips={tooltips}
              tooltipOffsetX={isTablet ? -20 : 20}
              tooltipOffsetY={isTablet ? 26 : 38}
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
