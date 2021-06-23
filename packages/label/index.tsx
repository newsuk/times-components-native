import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { colours } from "@times-components-native/styleguide";
import { StyleSheet } from "react-native";
import { spacing, fontFactory } from "@times-components-native/styleguide";

const styles = StyleSheet.create({
  title: {
    ...fontFactory({
      font: "body",
      fontSize: "cardMetaMobile",
    }),
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 10,
    letterSpacing: 0,
    includeFontPadding: false,
    paddingBottom: spacing(0),
    marginLeft: spacing(1),
    lineHeight: 11,
  },
});

interface LabelProps extends TextProps {
  children: string;
  accessibilityLabel?: string;
  style?: TextStyle;
  color?: string;
}

const Label = ({
  children,
  accessibilityLabel,
  style,
  color = colours.functional.primary,
  ...rest
}: LabelProps) => (
  <Text
    accessibilityLabel={accessibilityLabel}
    style={[styles.title, { color }, style || {}]}
    {...{ rest }}
  >
    {children}
  </Text>
);

export default Label;
