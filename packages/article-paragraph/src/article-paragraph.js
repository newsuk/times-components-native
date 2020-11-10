import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { useResponsiveContext } from "@times-components-native/responsive";
import styleFactory from "./styles";

const styles = styleFactory();

const BodyParagraph = ({
  height,
  narrowContent,
  style,
  children,
  attributes,
  split,
}) => {
  const { inline } = attributes || false;
  const { isTablet, narrowArticleBreakpoint } = useResponsiveContext();
  const getNarrowContentStyle = (width) => [styles.narrow, { maxWidth: width }];

  return (
    <View
      style={[
        styles.articleMainContentRow,
        styles.articleTextElement,
        isTablet && styles.articleMainContentRowTablet,
        isTablet && inline && styles.articleInlineContentRowTablet,
        isTablet &&
          inline &&
          split &&
          styles.articleInlineSplitContentRowTablet,
        narrowContent && getNarrowContentStyle(narrowArticleBreakpoint.content),
        style,
      ].concat(height ? [{ height: height }] : [])}
    >
      <View>{children}</View>
    </View>
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
