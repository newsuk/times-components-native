import { fonts } from "@times-components-native/styleguide";
import React from "react";
import { Platform, Text, View } from "react-native";

interface Props {
  dropCapColor: string;
  dropCapFont: string;
  dropCapFontSize: number;
  dropCapText: string;
  height: number;
  width: number;
}

const DropCap: React.FC<Props> = ({
  dropCapColor,
  dropCapFont,
  dropCapFontSize,
  dropCapText,
  height,
  width,
}) => (
  <View
    style={[
      {
        width,
        height: height + 3,
      },
    ]}
  >
    <Text
      allowFontScaling={false}
      style={[
        {
          color: dropCapColor,
          fontFamily: fonts[dropCapFont],
          fontSize: dropCapFontSize,
          lineHeight: height,
          paddingTop: Platform.OS === "ios" ? 24 : 20,
          width,
        },
      ]}
    >
      {dropCapText}
    </Text>
  </View>
);

export default DropCap;
