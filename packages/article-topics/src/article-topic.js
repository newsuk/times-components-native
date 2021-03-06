import React, { useState } from "react";
import Context from "@times-components-native/context";
import { Text, View } from "react-native";
import Link from "@times-components-native/link";
import Tooltip from "@times-components-native/tooltip";
import { useResponsiveContext } from "@times-components-native/responsive";
import { withTrackEvents } from "@times-components-native/tracking";
import styles from "./styles";
import { topicDefaultProps, topicPropTypes } from "./article-topic-prop-types";

const ArticleTopic = ({
  articleId,
  fontSize,
  index,
  lineHeight,
  name,
  onPress,
  onTooltipPresented,
  slug,
  tooltipDisplayedInView,
  tooltips,
}) => {
  const fontSizeStyle = fontSize ? { fontSize } : null;
  const lineHeightStyle = lineHeight ? { lineHeight } : null;
  const { isArticleTablet } = useResponsiveContext();

  const tooltipType = "topics";
  const showTooltip = index === 0 && tooltips.includes(tooltipType);
  const [isHighlighted, setIsHighlighted] = useState(showTooltip);

  const unhighlightTopic = () => {
    setIsHighlighted(false);
  };

  const articleTopic = (
    <Context.Consumer>
      {({ makeTopicUrl }) => (
        <View style={styles.spacer}>
          <Link
            onPress={(e) => onPress(e, { name, slug })}
            url={makeTopicUrl({ slug })}
            testIDProp="topic"
          >
            <View
              style={[
                styles.container,
                isHighlighted && styles.borderHighlight,
              ]}
            >
              <Text
                accessibilityComponentType="button"
                accessibilityRole="button"
                accessibilityTraits="button"
                style={[styles.text, fontSizeStyle, lineHeightStyle]}
              >
                {name}
              </Text>
            </View>
          </Link>
        </View>
      )}
    </Context.Consumer>
  );

  const articleTopicWithTooltip = (
    <Tooltip
      articleId={articleId}
      content={<Text>Tap a topic to see more of our coverage</Text>}
      displayedInView={tooltipDisplayedInView}
      offsetY={5}
      onClose={unhighlightTopic}
      onTooltipPresented={onTooltipPresented}
      placement="top"
      type={tooltipType}
      tooltips={tooltips}
      width={isArticleTablet ? 236 : 207}
    >
      {articleTopic}
    </Tooltip>
  );

  return showTooltip ? articleTopicWithTooltip : articleTopic;
};

ArticleTopic.propTypes = topicPropTypes;
ArticleTopic.defaultProps = topicDefaultProps;

export default withTrackEvents(ArticleTopic, {
  analyticsEvents: [
    {
      actionName: "Pressed",
      eventName: "onPress",
      getAttrs: ({ name, slug }) => ({
        name,
        slug,
      }),
      trackingName: "TopicLink",
    },
  ],
});
