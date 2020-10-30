import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const { style: TextStylePropTypes } = Text.propTypes;

const ArticleSummaryStrapline = ({ strapline, style, allowFontScaling }) => (
  <Text
    accessibilityRole="header"
    aria-level="4"
    style={[styles.strapline, style]}
    allowFontScaling={allowFontScaling !== false}
  >
    {strapline}
  </Text>
);

ArticleSummaryStrapline.propTypes = {
  strapline: PropTypes.string.isRequired,
  style: TextStylePropTypes,
};

ArticleSummaryStrapline.defaultProps = {
  style: {},
};

export default ArticleSummaryStrapline;
