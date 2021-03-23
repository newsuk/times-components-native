import React, { Fragment } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import {
  ArticleBylineWithLinks,
  hasBylineData,
} from "@times-components-native/article-byline";
import DatePublication from "@times-components-native/date-publication";

import metaPropTypes from "./article-meta-prop-types";
import styles from "../styles";

const ArticleMeta = ({
  articleId,
  bylines,
  hasStandfirst,
  onAuthorPress,
  onTooltipPresented,
  publicationName,
  publishedTime,
  tooltips,
}) => (
  <View style={[styles.metaContainer, !hasStandfirst && styles.metaFlagSpacer]}>
    {hasBylineData(bylines) && (
      <Fragment>
        <View style={styles.meta}>
          <ArticleBylineWithLinks
            articleId={articleId}
            ast={bylines}
            onAuthorPress={onAuthorPress}
            onTooltipPresented={onTooltipPresented}
            tooltipArrowOffset={120}
            tooltips={tooltips}
            tooltipOffsetX={-95}
            tooltipOffsetY={44}
          />
        </View>
      </Fragment>
    )}
    <View style={styles.meta}>
      <Text style={[styles.datePublication]}>
        <DatePublication date={publishedTime} publication={publicationName} />
      </Text>
    </View>
  </View>
);

ArticleMeta.propTypes = {
  ...metaPropTypes,
  onAuthorPress: PropTypes.func.isRequired,
};

export default ArticleMeta;
