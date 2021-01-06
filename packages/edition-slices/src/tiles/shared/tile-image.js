import React, { useState } from "react";
import { View } from "react-native";
import { PlayIcon } from "@times-components-native/video";
import Image from "@times-components-native/image";
import { playIconStyles } from "./styles";

const TileImage = ({ hasVideo, style, onLayout, playIconSize, ...props }) => {
  const [containerWidth, setContainerWidth] = useState(null);
  if (!hasVideo) {
    return <Image style={style} {...props} onLayout={onLayout && onLayout} />;
  }

  const handleOnLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
    onLayout && onLayout();
  };

  return (
    <View style={style}>
      <Image onLayout={handleOnLayout} {...props} />
      <View style={playIconStyles}>
        <PlayIcon containerWidth={containerWidth} />
      </View>
    </View>
  );
};

export default TileImage;
