import React, { FC } from "react";
import Svg, { Path, Rect } from "react-native-svg";

export enum PLAY_ICON_SIZE {
  SMALL = 32,
  MEDIUM = 48,
  LARGE = 64,
  XLARGE = 76,
}

export type PlayIconProps = {
  size?: PLAY_ICON_SIZE;
  containerWidth?: number;
};

export const getIconSize = (containerWidth: number) => {
  switch (true) {
    case containerWidth < 270:
      return PLAY_ICON_SIZE.SMALL;
    case containerWidth < 563:
      return PLAY_ICON_SIZE.MEDIUM;
    case containerWidth < 755:
      return PLAY_ICON_SIZE.LARGE;
    default:
      return PLAY_ICON_SIZE.XLARGE;
  }
};

const PlayIcon: FC<PlayIconProps> = ({ size = null, containerWidth = 0 }) => (
  <Svg
    width={size || getIconSize(containerWidth)}
    height={size || getIconSize(containerWidth)}
    viewBox="0 0 64 64"
    fill="none"
  >
    <Rect opacity="0.6" width="64" height="64" fill="#01000D" />
    <Path d="M20 16V48L44 32L20 16Z" fill="white" />
  </Svg>
);

export default PlayIcon;
