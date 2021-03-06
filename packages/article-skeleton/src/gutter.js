import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { tabletWidthMax } from "@times-components-native/styleguide";
import styles from "./styles/shared";

export const maxWidth = tabletWidthMax;

const Gutter = ({ children, style }) => (
  <View style={[style, styles.gutter]}>{children}</View>
);

Gutter.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({
    overflow: PropTypes.string,
  }),
};

Gutter.defaultProps = {
  style: {
    overflow: "hidden",
  },
};

export default Gutter;
