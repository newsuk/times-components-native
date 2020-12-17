import React, { FC } from "react";
import { colours } from "@times-components-native/styleguide";
// import Svg, { Path } from "@times-components-native/svgs";
import { Svg, Path } from "react-native-svg";
import { clean } from "@times-components-native/utils";
import { IconProps } from "./prop-types";

const IconSaveBookmark: FC<IconProps> = ({
  fillColour,
  height = 16,
  opacity,
  strokeColour,
  title = "Save to My Articles",
  width = 12,
}) => (
  <Svg
    aria-label="icon-save-bookmark"
    viewBox="0 0 12 16"
    {...clean({
      height,
      title,
      width: width || height,
    })}
  >
    <Path
      {...clean({
        fill: fillColour,
        opacity,
        stroke: strokeColour,
      })}
      d="M1 0h10a1 1 0 0 1 1 1v15l-5.98-4.466L0 16V1a1 1 0 0 1 1-1z"
    />
  </Svg>
);

IconSaveBookmark.defaultProps = {
  fillColour: colours.functional.secondary,
};

export default IconSaveBookmark;
