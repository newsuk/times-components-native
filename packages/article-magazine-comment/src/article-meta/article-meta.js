import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import {
  ArticleBylineWithLinks,
  hasBylineData,
} from "@times-components-native/article-byline";
import DatePublication from "@times-components-native/date-publication";

import metaPropTypes from "./article-meta-prop-types";
import styles from "../styles";

const Separator = () => <View style={styles.separator} />;

const ArticleMeta = ({
  bylines,
  isArticleTablet,
  hasElementsAbove,
  onAuthorPress,
  publicationName,
  publishedTime,
}) => (
  <View
    style={[
      styles.metaContainer,
      !hasElementsAbove && styles.metaSpacer,
      isArticleTablet && styles.metaContainerTablet,
    ]}
  >
    {hasBylineData(bylines) && (
      <View style={[styles.meta, isArticleTablet && styles.metaTablet]}>
        <ArticleBylineWithLinks ast={bylines} onAuthorPress={onAuthorPress} />
      </View>
    )}
    {isArticleTablet ? <Separator /> : null}
    <View style={[styles.meta, isArticleTablet && styles.metaTablet]}>
      <Text
        style={[
          styles.datePublication,
          isArticleTablet && styles.datePublicationTablet,
        ]}
      >
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
