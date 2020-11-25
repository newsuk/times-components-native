import React from "react";
import { View } from "react-native";
import {
  hasBylineData,
  ArticleBylineWithLinks,
} from "@times-components-native/article-byline";
import styles from "../styles";

import Image from "@times-components-native/image";
import ArticleTopics from "@times-components-native/article-topics";
import articleLeftColumnPropTypes from "./article-left-column-prop-types";

const ArticleLeftColumn = ({
  authorImage,
  bylines,
  onAuthorPress,
  onTooltipPresented,
  onTopicPress,
  tooltips,
  topics,
}) => (
  <View style={styles.leftColumnContainer}>
    <View style={styles.authorContainer}>
      <Image aspectRatio={1} uri={authorImage} rounded />
      {hasBylineData(bylines) && (
        <View style={styles.bylines}>
          <ArticleBylineWithLinks
            ast={bylines}
            centered
            onAuthorPress={onAuthorPress}
            onTooltipPresented={onTooltipPresented}
            tooltipArrowOffset={50}
            tooltipOffsetX={10}
            tooltipOffsetY={30}
            tooltips={tooltips}
          />
        </View>
      )}
    </View>
    {topics ? (
      <View style={styles.topicsContainer}>
        <ArticleTopics
          onTooltipPresented={onTooltipPresented}
          onPress={onTopicPress}
          tooltips={tooltips}
          topics={topics}
          style={{ justifyContent: "flex-start" }}
        />
      </View>
    ) : null}
  </View>
);

ArticleLeftColumn.propTypes = articleLeftColumnPropTypes;

export default ArticleLeftColumn;
