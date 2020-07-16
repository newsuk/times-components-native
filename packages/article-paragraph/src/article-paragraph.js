import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { ResponsiveContext } from "@times-components-native/responsive";
import styleFactory from "./styles";

const styles = styleFactory();

const BodyParagraph = ({height, narrowContent, style, children}) => (
  <ResponsiveContext.Consumer>
    {({ isTablet }) => (
      <View
        style={[
          styles.articleMainContentRow,
          styles.articleTextElement,
          isTablet && styles.articleMainContentRowTablet,
          narrowContent && styles.narrow,
          style
        ].concat(height ? [{ height: height }] : [])}
      >
        <View>{children}</View>
      </View>
    )}
  </ResponsiveContext.Consumer>
);

BodyParagraph.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  style: PropTypes.objectOf({})
};

BodyParagraph.defaultProps = {
  height: null,
  style: {}
};

export default BodyParagraph;
