import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { ResponsiveContext } from "@times-components-native/responsive";
import styleFactory from "./styles";

const styles = styleFactory();

const BodyParagraph = ({ height, narrowContent, style, children }) => {
  const getNarrowContentStyle = (width) => [styles.narrow, { maxWidth: width }];

  return (
    <ResponsiveContext.Consumer>
      {({ isTablet, narrowArticleBreakpoint }) => (
        <View
          style={[
            styles.articleMainContentRow,
            styles.articleTextElement,
            isTablet && styles.articleMainContentRowTablet,
            narrowContent &&
              getNarrowContentStyle(narrowArticleBreakpoint.content),
            style,
          ].concat(height ? [{ height: height }] : [])}
        >
          <View>{children}</View>
        </View>
      )}
    </ResponsiveContext.Consumer>
  );
};

BodyParagraph.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  narrowContent: PropTypes.bool,
  style: PropTypes.object,
};

BodyParagraph.defaultProps = {
  height: null,
  narrowContent: false,
  style: {},
};

export default BodyParagraph;
