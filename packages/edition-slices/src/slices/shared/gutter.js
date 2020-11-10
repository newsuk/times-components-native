import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import styleFactory from "./styles";

const Gutter = ({ children, grow }) => {
  const { isTablet, editionBreakpoint } = useResponsiveContext();
  const styles = styleFactory(isTablet, editionBreakpoint);

  return (
    <View style={[styles.gutterStyles, grow && { flexGrow: 1 }]}>
      {children}
    </View>
  );
};

Gutter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Gutter;
