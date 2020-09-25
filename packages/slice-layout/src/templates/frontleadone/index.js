import React from "react";
import { Dimensions, View } from "react-native";
import stylesFactory, { getStyles } from "./styles";

const calculateContentWidth = (windowWidth) => {
  if (windowWidth >= 1366) return 1180;
  if (windowWidth >= 1194) return 1024;
  if (windowWidth >= 1112) return 1000;
  if (windowWidth >= 1080) return 1000;
  if (windowWidth >= 1024) return 920;

  return 1000;
};

const FrontLeadOneSlice = ({ breakpoint, orientation, lead }) => {
  const styles = stylesFactory(breakpoint);
  const windowWidth = Dimensions.get("window").width;
  const newStyles = getStyles(orientation, windowWidth);

  return (
    <View
      style={[
        styles.container,
        orientation === "landscape" && {
          width: calculateContentWidth(windowWidth),
          alignSelf: "center",
        },
      ]}
    >
      {lead}
      <View
        style={[
          {
            backgroundColor: "#f0eedf",
          },
          newStyles.inTheNewsContainer,
        ]}
      />
    </View>
  );
};

export default FrontLeadOneSlice;
