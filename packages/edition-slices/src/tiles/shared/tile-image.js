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
    <View style={style} onLayout={onLayout && onLayout}>
      <Image {...props} />
      <View style={playIconStyles}>
        <PlayIcon />
      </View>
    </View>
  );
};

export default TileImage;
