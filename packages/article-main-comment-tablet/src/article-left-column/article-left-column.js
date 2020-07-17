import React from "react";
import { View } from "react-native";
import {
  hasBylineData,
  ArticleBylineWithLinks,
} from "@times-components-native/article-byline";
import PropTypes from "prop-types";
import styles from "../styles";

import { ModalImage } from "@times-components-native/image";
import ArticleTopics from "@times-components-native/article-topics";
import {
  articleLeftColumnPropTypes,
  articleLeftColumnDefaultProps,
} from "./article-left-column-prop-types";

const ArticleLeftColumn = ({
  authorImage,
  bylines,
  onAuthorPress,
  onImagePress,
  onTopicPress,
  topics,
}) => (
  <View style={styles.leftColumnContainer}>
    <View style={styles.authorImage}>
      <ModalImage
        aspectRatio={1}
        uri={authorImage}
        onImagePress={onImagePress ? () => onImagePress(0) : undefined}
        rounded
      />
    </View>
    {hasBylineData(bylines) && (
      <View style={styles.bylines}>
        <ArticleBylineWithLinks
          ast={bylines}
          centered
          onAuthorPress={onAuthorPress}
        />
      </View>
    )}
    {topics ? (
      <View style={styles.topicsContainer}>
        <ArticleTopics
          onPress={onTopicPress}
          topics={topics}
          style={{ justifyContent: "flex-start" }}
        />
      </View>
    ) : null}
  </View>
);

ArticleLeftColumn.propTypes = {
  ...articleLeftColumnPropTypes,
  onImagePress: PropTypes.func.isRequired,
};

ArticleLeftColumn.defaultProps = articleLeftColumnDefaultProps;

export default ArticleLeftColumn;
