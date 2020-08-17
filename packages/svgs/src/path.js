import React from "react";
import { Path as ARTPath, Shape } from "@react-native-community/art";
import PropTypes from "prop-types";

const Path = ({ d, fill, stroke, strokeWidth, opacity }) => {
  const artStroke = stroke === "none" ? null : stroke;
  const artFill = fill === "none" ? null : fill;

  return (
    <Shape
      d={d}
      fill={artFill}
      opacity={opacity}
      stroke={artStroke}
      strokeWidth={strokeWidth}
    />
  );
};

Path.propTypes = {
  d: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(ARTPath)])
    .isRequired,
  fill: PropTypes.string,
  opacity: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
};

Path.defaultProps = {
  fill: null,
  opacity: null,
  stroke: null,
  strokeWidth: null,
};

export default Path;
