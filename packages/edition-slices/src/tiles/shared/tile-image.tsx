import React, { FC, useState } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import { PlayIcon } from "@times-components-native/video";
import Image from "@times-components-native/image";
import { playIconStyles } from "./styles";

interface Props {
  hasVideo?: boolean | null;
  aspectRatio: number;
  relativeWidth: number;
  relativeHeight: number;
  relativeVerticalOffset: number;
  relativeHorizontalOffset: number;
  fill?: boolean;
  style: ViewStyle;
  onLayout?: () => void;
  uri: string;
}

const TileImage: FC<Props> = ({ hasVideo, style, onLayout, ...props }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  if (!hasVideo) {
    return <Image style={style} {...props} onLayout={onLayout && onLayout} />;
  }

  const handleOnLayout = (event: LayoutChangeEvent) => {
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
