import React from "react";
import { Text, View } from "react-native";
import { defaultProps, propTypes } from "./caption-prop-types";
import styles from "./styles";

const renderCredits = (style, credits, testIDCredit) => {
  if (!credits || credits === "") {
    return null;
  }
  return (
    <Text
      testID={testIDCredit}
      style={[styles.text, styles.credits, style.text, style.credits]}
    >
      {credits.toUpperCase()}
    </Text>
  );
};

const renderText = (style, text, testIDCaption) => {
  if (!text || text === "") {
    return null;
  }

  return (
    <Text
      testID={testIDCaption}
      style={[styles.text, style.text, style.caption]}
    >
      {text}
    </Text>
  );
};

const Caption = ({
  children,
  credits,
  style,
  text,
  testIDCaption = null,
  testIDCredit = null,
}) => (
  <View>
    {children}
    <View style={[styles.container, style.container]}>
      {renderText(style, text, testIDCaption)}
      {renderCredits(style, credits, testIDCredit)}
    </View>
  </View>
);

Caption.propTypes = propTypes;
Caption.defaultProps = defaultProps;

export default Caption;
