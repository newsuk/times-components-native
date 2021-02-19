import React, { FC } from "react";
import { Text, TextProps, View } from "react-native";
import { TextLink } from "@times-components-native/link";
import styles from "./styles";

type Props = {
  onCommentGuidelinesPress: TextProps["onPress"];
};

const DisabledComments: FC<Props> = ({ onCommentGuidelinesPress }) => (
  <View style={styles.container}>
    <Text style={styles.headline}>
      Comments for this article have been turned off
    </Text>
    <Text style={styles.supporting}>
      For more details, please see our {"\n"}
      <TextLink
        onPress={onCommentGuidelinesPress}
        style={styles.link}
        target={null}
        url={null}
      >
        community guidelines
      </TextLink>
    </Text>
  </View>
);

export default DisabledComments;
