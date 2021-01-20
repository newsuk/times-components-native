import React, { FC, useState } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import { PlayIcon } from "@times-components-native/video";
import Image from "@times-components-native/image";
import { playIconStyles } from "./styles";
import { ResponsiveImageProps } from "@times-components-native/responsive-image/src";

interface Props extends ResponsiveImageProps {
  hasVideo?: boolean | null;
  style: ViewStyle;
  onLayout?: () => void;
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
