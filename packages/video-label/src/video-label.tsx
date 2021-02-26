import React, { FC } from "react";
import { Text, View } from "react-native";
import { IconVideo } from "@times-components-native/icons";
import styles from "./style";

export interface VideoLabel {
  color?: string;
  title?: string;
}

const VideoLabel: FC<VideoLabel> = ({ color = "black", title = "" }) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <IconVideo fillColour={color} height={9} />
    </View>
    <Text style={[styles.title, { color }]}>
      {title ? title.toUpperCase() : "VIDEO"}
    </Text>
  </View>
);

export default VideoLabel;
