import React, { FC } from "react";
import { colours } from "@times-components-native/styleguide";
// import Svg, { G, Path } from "@times-components-native/svgs";
import { Svg, G, Path } from "react-native-svg";
import { clean } from "@times-components-native/utils";
import propTypes, { IconProps } from "./prop-types";

export type ForwardArrowProps = Pick<
  IconProps,
  "fillColour" | "width" | "height"
>;

const ratio = 7 / 12;

const ForwardArrow: FC<ForwardArrowProps> = ({
  fillColour = colours.functional.secondary,
  height = 15,
  width = 15,
}) => (
  <Svg
    aria-label="icon-forward-arrow"
    viewBox="42 12 60 120"
    {...clean({
      height,
      width: width || height * ratio,
    })}
  >
    <G fill={fillColour}>
      <Path d="M45.8,132L42,128.2,74.8,72,42,15.8,45.8,12,102,72Z" />
    </G>
  </Svg>
);

ForwardArrow.propTypes = propTypes;

ForwardArrow.defaultProps = {
  fillColour: colours.functional.action,
};

export default ForwardArrow;
