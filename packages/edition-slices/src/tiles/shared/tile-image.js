import React from "react";
import { View } from "react-native";
import { PlayIcon } from "@times-components-native/video";
import Image from "@times-components-native/image";
import { playIconStyles } from "./styles";

const TileImage = ({ hasVideo, style, onLayout, ...props }) => {
  if (!hasVideo) {
    return <Image style={style} {...props} onLayout={onLayout && onLayout} />;
  }

  return (
    <View style={style}>
      <Image onLayout={onLayout && onLayout} {...props} />
      <View style={playIconStyles}>
        <PlayIcon />
      </View>
    </View>
  );
};

export default TileImage;
