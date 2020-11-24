import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import Context from "@times-components-native/context";
import Button from "@times-components-native/button";
import { TextLink } from "@times-components-native/link";
import styleguide from "@times-components-native/styleguide";
import Tooltip from "@times-components-native/tooltip";
import styles from "./styles";

const Comments = ({
  articleId,
  commentCount,
  onCommentGuidelinesPress,
  onCommentsPress,
  onTooltipPresented,
  tooltips = [],
  url,
}) => (
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
    <Tooltip
      arrowOffset={44}
      content={
        <Text>Tap to read comments and join in with the conversation</Text>
      }
      offsetX={12}
      onTooltipPresented={onTooltipPresented}
      type="commenting"
      tooltips={["commenting"]}
      placement="right"
      width={207}
    >
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
    </Tooltip>
  </View>
);

Comments.propTypes = {
  articleId: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  onCommentGuidelinesPress: PropTypes.func.isRequired,
  onCommentsPress: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default Comments;
