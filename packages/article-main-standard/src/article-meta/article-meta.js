import React from "react";
import { View } from "react-native";
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
  tooltips = [],
}) {
  const withBylineTooltip =
    hasBylineData(bylines) && tooltips.includes("profile");
  return (
    <View
      style={[
        styles.articleMeta,
        isArticleTablet && styles.articleMetaTablet,
        !isArticleTablet && withBylineTooltip && styles.articleMetaWidthMargin,
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
              tooltipArrowOffset={isArticleTablet ? 130 : 120}
              tooltips={tooltips}
              tooltipOffsetX={isArticleTablet ? -20 : 20}
              tooltipOffsetY={isArticleTablet ? 26 : 38}
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
        <DatePublication
          style={styles.datePublication}
          date={publishedTime}
          publication={publicationName}
        />
      </View>
    </View>
  );
}

ArticleMeta.propTypes = propTypes;
ArticleMeta.defaultProps = defaultProps;

export default ArticleMeta;
