import React, { ReactNode } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import { getDimensions } from "@times-components-native/utils";

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

function calculateContentWidth(windowWidth: number, orientation: string) {
  if (orientation === "landscape") {
    if (windowWidth >= 1366) return 1140;
    if (windowWidth >= 1194) return 1024;
    if (windowWidth >= 1080) return 1000;
    return 944;
  } else {
    if (windowWidth >= 1024) return 920;
    if (windowWidth >= 810) return 730;

    return 688;
  }
}

const TabletContentContainer = ({ style, children }: Props) => {
  const { orientation } = useResponsiveContext();
  const { width: windowWidth } = getDimensions();

  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          width: calculateContentWidth(windowWidth, orientation),
          alignSelf: "center",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default TabletContentContainer;
