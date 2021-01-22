import { fonts } from "@times-components-native/styleguide";
import React from "react";
import { Platform, Text, View } from "react-native";

const fontAdditionalSpacingMap: Record<string, number> = {
  cultureMagazine: 2,
  dropCap: 0,
  stMagazine: 1,
  styleMagazine: 0,
};

const convertScale = (scale: string): number => {
  let scaleValue;
  switch (scale) {
    case "large":
      scaleValue = 1.17;
      break;
    case "xlarge":
      scaleValue = 1.27;
      break;
    default:
      scaleValue = 1;
  }
  return scaleValue;
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
  const scaleValue = convertScale(scale);

  const dpPadding =
    ((Platform.OS === "ios" ? 23 : 20) +
      fontAdditionalSpacingMap[dropCapFont]) *
    scaleValue;

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
            includeFontPadding: false,
            lineHeight: height,
            paddingTop: dpPadding,
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
