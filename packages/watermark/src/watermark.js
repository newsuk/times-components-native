import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";
import watermarkPath from "../assets/watermark.png";

const Watermark = ({ height, width }) => (
  <Image
    resizeMode="contain"
    source={watermarkPath}
    style={{ height, width }}
  />
);

Watermark.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Watermark;
