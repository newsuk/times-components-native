import React from "react";
import { View } from "react-native";
import Context from "@times-components-native/context";
import styleguide from "@times-components-native/styleguide";
import ArticleTopic from "./article-topic";
import styles from "./styles";
import {
  topicsDefaultProps,
  topicsPropTypes,
} from "./article-topics-prop-types";

const renderArticleTopics = (
  articleId,
  tooltipDisplayedInView,
  tooltips,
  topics,
  onPress,
  onTooltipPresented,
  fontStyle,
) =>
  topics.map(({ name, slug }, index) => (
    <ArticleTopic
      articleId={articleId}
      fontSize={fontStyle.fontSize}
      index={index}
      key={slug}
      lineHeight={fontStyle.lineHeight}
      name={name}
      onPress={onPress}
      onTooltipPresented={onTooltipPresented}
      slug={slug}
      tooltipDisplayedInView={tooltipDisplayedInView}
      tooltips={tooltips}
    />
  ));

const ArticleTopics = ({
  articleId,
  onPress,
  onTooltipPresented,
  style,
  tooltips,
  tooltipDisplayedInView,
  topics,
}) => (
  <Context.Consumer>
    {({ theme: { scale } }) => {
      const themedStyleguide = styleguide({ scale });

      return (
        <View style={[styles.topicGroup, style]}>
          {renderArticleTopics(
            articleId,
            tooltipDisplayedInView,
            tooltips,
            topics,
            onPress,
            onTooltipPresented,
            themedStyleguide.fontFactory({
              font: "supporting",
              fontSize: "link",
            }),
          )}
        </View>
      );
    }}
  </Context.Consumer>
);

ArticleTopics.propTypes = topicsPropTypes;
ArticleTopics.defaultProps = topicsDefaultProps;

export default ArticleTopics;
