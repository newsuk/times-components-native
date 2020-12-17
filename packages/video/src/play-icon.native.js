import React from "react";
import { View } from "react-native";
import { Svg, Rect, Polygon } from "react-native-svg";

const PlayIcon = () => (
  <View>
    <Svg aria-label="icon-play" height={70} viewBox="0 0 100 100" width={70}>
      <Rect
        fill="#000000"
        fillOpacity="0.4"
        height="100"
        width="100"
        x="0"
        y="0"
      />
      <Polygon fill="#FFFFFF" points="30,20 70,50 30,80" />
    </Svg>
  </View>
);

export default PlayIcon;
