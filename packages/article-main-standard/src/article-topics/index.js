import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import ArticleTopics from "@times-components-native/article-topics";
import styles from "../styles/article-topics";

const ShowTopics = ({ onPress, topics }) => {
  if (topics && topics.length > 0) {
    return (
      <View style={styles.topicsContainer}>
        <ArticleTopics onPress={onPress} topics={topics} />
      </View>
    );
  }

  return null;
};

ShowTopics.propTypes = {
  onPress: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

ShowTopics.defaultProps = {
  topics: null,
};

export default ShowTopics;
