import React from "react";
import { colours } from "@times-components-native/styleguide";
import Svg, { G, Path } from "@times-components-native/svgs";
import { clean } from "@times-components-native/utils";
import propTypes from "./prop-types";

const IconClose = ({ fillColour, height, width }) => (
  <Svg
    aria-label="icon-close"
    viewBox="0 0 16 16"
    {...clean({
      height,
      width: width || height,
    })}
  >
    <G fill={fillColour} fill-rule="evenodd">
      <Path d="M1.678 1.012l13.31 13.31C.184.184.184.482 0 .666-.184.184-.482.184-.666 0L1.012 1.678C-.184-.184-.184-.482 0-.666.184-.184.482-.184.666 0Z" />
      <Path d="M1.678 14.988l13.31-13.31C.184-.184.184-.482 0-.666-.184-.184-.482-.184-.666 0L-13.31 13.31C-.184.184-.184.482 0 .666.184.184.482.184.666 0Z" />
    </G>
  </Svg>
);

IconClose.propTypes = propTypes;

IconClose.defaultProps = {
  fillColour: colours.functional.action,
};

export default IconClose;
