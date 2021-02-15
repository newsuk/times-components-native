import React, { FC } from "react";
import { GestureResponderEvent, Text, View } from "react-native";
import Context from "@times-components-native/context";
import Button from "@times-components-native/button";
import { TextLink } from "@times-components-native/link";
import styleguide from "@times-components-native/styleguide";
import Tooltip from "@times-components-native/tooltip";
import styles from "./styles";

export type CommentsProps = {
  articleId: string;
  commentCount?: number;
  narrowContent?: boolean;
  onCommentGuidelinesPress: () => void;
  onCommentsPress: (
    event: GestureResponderEvent,
    { articleId, url }: { articleId: string; url: string },
  ) => void;
  onTooltipPresented?: () => void;
  tooltips: string[];
  url: string;
};

const Comments: FC<CommentsProps> = ({
  articleId,
  commentCount = 0,
  narrowContent = false,
  onCommentGuidelinesPress,
  onCommentsPress,
  onTooltipPresented = () => null,
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
      <TextLink
        onPress={onCommentGuidelinesPress}
        style={styles.link}
        target={null}
        url={null}
      >
        here
      </TextLink>
    </Text>
    <Tooltip
      arrowOffset={43}
      content={
        <Text>Tap to read comments and join in with the conversation</Text>
      }
      offsetX={12}
      onTooltipPresented={onTooltipPresented}
      type="commenting"
      tooltips={tooltips}
      placement="right"
      width={narrowContent ? 165 : 207}
      articleId={articleId}
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

export default Comments;
