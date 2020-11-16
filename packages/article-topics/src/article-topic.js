import React, { useState } from "react";
import Context from "@times-components-native/context";
import { useResponsiveContext } from "@times-components-native/responsive";
import { Text, View } from "react-native";
import Link from "@times-components-native/link";
import Tooltip from "@times-components-native/tooltip";
import { withTrackEvents } from "@times-components-native/tracking";
import styles from "./styles";
import { topicDefaultProps, topicPropTypes } from "./article-topic-prop-types";

const ArticleTopic = ({
  fontSize,
  index,
  lineHeight,
  name,
  onPress,
  onTooltipPresented,
  slug,
  tooltips,
}) => {
  const fontSizeStyle = fontSize ? { fontSize } : null;
  const lineHeightStyle = lineHeight ? { lineHeight } : null;

  const { isTablet } = useResponsiveContext();
  const tooltipType = "topics";

  const showTooltip = isTablet && tooltips.includes(tooltipType) && index === 0;
  const initialHighlightState = showTooltip ? true : false;
  const [isHighlighted, setIsHighlighted] = useState(initialHighlightState);

  const unhighlightTopic = () => {
    setIsHighlighted(false);
  };

  const topic = (name, slug) => (
    <Context.Consumer>
      {({ makeTopicUrl }) => (
        <View style={styles.spacer}>
          <Link
            onPress={(e) => onPress(e, { name, slug })}
            url={makeTopicUrl({ slug })}
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

  const topicWithTooltip = (name, slug) => {
    return (
      <Tooltip
        content={<Text>Tap a topic to see more of our coverage</Text>}
        onClose={unhighlightTopic}
        onTooltipPresented={onTooltipPresented}
        type={tooltipType}
        tooltips={tooltips}
        alignment="left"
        width={236}
      >
        {topic(name, slug)}
      </Tooltip>
    );
  };

  return showTooltip ? topicWithTooltip(name, slug) : topic(name, slug);
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
