import React, { FC } from "react";
import { colours } from "@times-components-native/styleguide";
import { Polygon, Rect, Svg } from "react-native-svg";
import { clean } from "@times-components-native/utils";
import { IconProps } from "./prop-types";

const viewBox = "0 0 68 40";

const ratio = 68 / 40;
const IconVideo: FC<IconProps> = ({
  fillColour = colours.functional.brandColour,
  height = 15,
  strokeColour,
  title = "Video Icon",
  width = 15,
}) => (
  <Svg
    aria-label="icon-video"
    viewBox={viewBox}
    {...clean({
      height,
      title,
      width: width || height * ratio,
    })}
  >
    <Rect
      {...clean({
        fill: fillColour,
        stroke: strokeColour,
      })}
      height="40"
      width="50"
      x="0"
      y="0"
    />
    <Polygon
      {...clean({
        fill: fillColour,
        stroke: strokeColour,
      })}
      points="52 12 68 2 68 38 52 28"
    />
  </Svg>
);

IconVideo.defaultProps = {
  fillColour: colours.functional.brandColour,
};

export default IconVideo;