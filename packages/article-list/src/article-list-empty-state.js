import React from "react";
import { View, Text } from "react-native";
import Watermark from "@times-components-native/watermark";
import styles, { watermarkStyles } from "./styles";
import propTypes from "./article-list-empty-state-prop-types";

const ArticleListEmptyState = ({ message }) => (
  <View style={styles.listEmptyStateContainer}>
    <Text style={styles.listEmptyMessage}>{message}</Text>
    <View style={styles.listEmptyWatermarkContainer}>
      <Watermark
        height={watermarkStyles.height}
        viewBox={watermarkStyles.viewBox}
        width={watermarkStyles.width}
      />
    </View>
  </View>
);

ArticleListEmptyState.propTypes = propTypes;
export default ArticleListEmptyState;
