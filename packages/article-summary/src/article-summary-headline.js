import React from "react";
import { Text, Platform } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const { style: TextStylePropTypes } = Text.propTypes;

const ArticleSummaryHeadline = ({
  className,
  headline,
  style,
  allowFontScaling,
}) => (
  <Text
    testID={"article-summary-headline"}
    accessibilityRole="header"
    aria-level="3"
    allowFontScaling={
      allowFontScaling !== false ? Platform.OS === "ios" : false
    }
    className={className}
    style={[styles.headline, styles.headlineWrapper, style]}
  >
    {headline}
  </Text>
);

ArticleSummaryHeadline.propTypes = {
  allowFontScaling: PropTypes.bool,
  className: PropTypes.string,
  headline: PropTypes.string.isRequired,
  style: TextStylePropTypes,
};

ArticleSummaryHeadline.defaultProps = {
  allowFontScaling: false,
  className: "",
  style: {},
};

export default ArticleSummaryHeadline;
