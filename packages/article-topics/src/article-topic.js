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

  const showTooltip = index === 0;
  const [isHighlighted, setIsHighlighted] = useState(showTooltip);

  const unhighlightTopic = () => {
    setIsHighlighted(false);
  };

  return (
    showTooltip && (
      <Tooltip
        content={<Text>Tap a topic to see more of our coverage</Text>}
        onClose={unhighlightTopic}
        onTooltipPresented={onTooltipPresented}
        type="topics"
        tooltips={tooltips}
        alignment="left"
        width={236}
      >
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
      </Tooltip>
    )
  );
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
