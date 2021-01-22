import React, { FC, useState } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import { PlayIcon } from "@times-components-native/video";
import Image from "@times-components-native/image";
import { playIconStyles } from "./styles";
import { ResponsiveImageProps } from "@times-components-native/responsive-image/src";
import { getIconSize } from "@times-components-native/video/src/play-icon";
import { useResponsiveContext } from "@times-components-native/responsive";
import { Orientation } from "@times-components-native/responsive/src/context";

interface Props extends ResponsiveImageProps {
  hasVideo?: boolean | null;
  style: ViewStyle;
  onLayout?: () => void;
}

const TileImage: FC<Props> = ({ hasVideo, style, onLayout, ...props }) => {
  const { orientation } = useResponsiveContext();
  const [imageHeight, setImageHeight] = useState(0);
  const [iconSize, setIconSize] = useState(getIconSize(0));

  if (!hasVideo) {
    return <Image style={style} {...props} onLayout={onLayout && onLayout} />;
  }

  const handleOnLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setImageHeight(height);
    setIconSize(getIconSize(width));
    onLayout && onLayout();
  };

  return (
    <View style={style}>
      <Image
        onLayout={handleOnLayout}
        {...props}
        key={
          orientation === Orientation.PORTRAIT
            ? "tile-image-portrait"
            : "tile-image-landscape"
        }
      />
      <View style={[playIconStyles, { top: imageHeight - iconSize }]}>
        <PlayIcon size={iconSize} />
      </View>
    </View>
  );
};

export default TileImage;
