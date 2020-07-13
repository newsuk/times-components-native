import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import DatePublication from "@times-components-native/date-publication";

import metaPropTypes from "./article-meta-prop-types";
import styles from "../styles";

const ArticleMeta = ({
  hasStandfirst,
  publicationName,
  publishedTime
}) => (
  <View
    style={[
      styles.metaContainer,
      !hasStandfirst && styles.metaFlagSpacer
    ]}
  >
    <View style={styles.meta}>
      <Text
        style={styles.datePublication}
      >
        <DatePublication date={publishedTime} publication={publicationName} />
      </Text>
    </View>
  </View>
);

ArticleMeta.propTypes = {
  ...metaPropTypes,
  onAuthorPress: PropTypes.func.isRequired
};

export default ArticleMeta;
