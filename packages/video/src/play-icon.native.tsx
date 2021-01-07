import React, { FC } from "react";
import Svg, { Path, Rect } from "react-native-svg";

export enum PLAY_ICON_SIZE {
  SMALL = 32,
  MEDIUM = 48,
  LARGE = 64,
  XLARGE = 76,
}

export type PlayIconProps = {
  containerWidth?: number;
};

const getSize = (containerWidth: number) => {
  switch (true) {
    case containerWidth > 270:
      return PLAY_ICON_SIZE.MEDIUM;
    case containerWidth > 563:
      return PLAY_ICON_SIZE.LARGE;
    case containerWidth > 755:
      return PLAY_ICON_SIZE.XLARGE;
    default:
      return PLAY_ICON_SIZE.SMALL;
  }
};

const PlayIcon: FC<PlayIconProps> = ({ containerWidth = 0 }) => {
  const size = getSize(containerWidth);
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <Rect opacity="0.6" width="64" height="64" fill="#01000D" />
      <Path d="M20 16V48L44 32L20 16Z" fill="white" />
    </Svg>
  );
};

export default PlayIcon;
