import { fonts } from "@times-components-native/styleguide";
import React from "react";
import { Platform, Text, View } from "react-native";

const scaleMap: Record<string, number> = {
  medium: 1,
  large: 1.17,
  xlarge: 1.27,
};

const fontAdditionalPaddingMap: Record<string, number> = {
  cultureMagazine: 2,
  dropCap: 0,
  stMagazine: 1,
  styleMagazine: 0,
};

interface Props {
  dropCapColor: string;
  dropCapFont: string;
  dropCapFontSize: number;
  dropCapText: string;
  height: number;
  scale: string;
  width: number;
}

const DropCap: React.FC<Props> = ({
  dropCapColor,
  dropCapFont,
  dropCapFontSize,
  dropCapText,
  height,
  scale,
  width,
}) => {
  const baseAdditionalPadding = Platform.OS === "ios" ? 23 : 20;
  const fontSpecificPadding = fontAdditionalPaddingMap[dropCapFont] ?? 0;
  const scaleValue = scaleMap[scale] ?? 1;

  const additionalPadding =
    (baseAdditionalPadding + fontSpecificPadding) * scaleValue;

  return (
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
            paddingTop: additionalPadding,
            width,
          },
        ]}
      >
        {dropCapText}
      </Text>
    </View>
  );
};

export default DropCap;
