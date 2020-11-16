import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import Context from "@times-components-native/context";
import Button from "@times-components-native/button";
import { TextLink } from "@times-components-native/link";
import styleguide, { spacing } from "@times-components-native/styleguide";
import { useResponsiveContext } from "@times-components-native/responsive";
import Tooltip from "@times-components-native/tooltip";
import styles from "./styles";

const Comments = ({
  articleId,
  commentCount,
  onCommentGuidelinesPress,
  onCommentsPress,
  onTooltipPresented,
  tooltips,
  url,
}) => {
  const { isTablet } = useResponsiveContext();
  const tooltipType = "commenting";

  const button = (
    <Context.Consumer>
      {({ theme: { scale } }) => {
        const themedStyleguide = styleguide({ scale });
        const fontFactory = themedStyleguide.fontFactory({
          font: "supporting",
          fontSize: "button",
        });
        return (
          <Button
            fontSize={fontFactory.fontSize}
            lineHeight={fontFactory.lineHeight}
            onPress={(e) => onCommentsPress(e, { articleId, url })}
            style={styles.button}
            title={commentCount > 0 ? "View comments" : "Post a comment"}
          />
        );
      }}
    </Context.Consumer>
  );

  const buttonTooltip = (
    <Tooltip
      content={
        <Text>Tap to read comments and join in with the conversation</Text>
      }
      onTooltipPresented={onTooltipPresented}
      type={tooltipType}
      tooltips={tooltips}
      alignment="center"
      offsetY={-spacing(1)}
    >
      {button}
    </Tooltip>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>{`${commentCount} ${
        commentCount === 1 ? "comment" : "comments"
      }`}</Text>
      <Text style={styles.supporting}>
        Comments are subject to our community guidelines, which can be
        viewed&nbsp;
        <TextLink onPress={onCommentGuidelinesPress} style={styles.link}>
          here
        </TextLink>
      </Text>
      {tooltips.includes(tooltipType) && isTablet ? buttonTooltip : button}
    </View>
  );
};

Comments.propTypes = {
  articleId: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  onCommentGuidelinesPress: PropTypes.func.isRequired,
  onCommentsPress: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default Comments;
