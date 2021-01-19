import { fonts, spacing } from "@times-components-native/styleguide";
import React from "react";
import { Text, View } from "react-native";

export default ({
  dropCapColor,
  dropCapFont,
  dropCapFontSize,
  dropCapText,
  height,
  narrowContent,
  width,
}) => (
  <View
    style={[
      {
        width,
        // height: height * 1.33,
        height: height + 1,
      },
      narrowContent && { paddingLeft: 7 },
    ]}
  >
    <Text
      allowFontScaling={false}
      style={[
        {
          color: dropCapColor,
          fontFamily: fonts[dropCapFont],
          fontSize: dropCapFontSize,
          // lineHeight: height * 1.33,
          lineHeight: height,
          paddingTop: 24,
          width,
          // backgroundColor: "red",
        },
      ]}
    >
      {dropCapText}
    </Text>
  </View>
);
