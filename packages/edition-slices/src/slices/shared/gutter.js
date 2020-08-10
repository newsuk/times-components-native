import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { ResponsiveContext } from "@times-components-native/responsive";
import styleFactory from "./styles";

const Gutter = ({ children, grow }) => (
  <ResponsiveContext.Consumer>
    {({ isTablet, editionBreakpoint }) => {
      const styles = styleFactory(isTablet, editionBreakpoint);

      return (
        <View style={[styles.gutterStyles, grow && { flexGrow: 1 }]}>
          {children}
        </View>
      );
    }}
  </ResponsiveContext.Consumer>
);

Gutter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Gutter;
