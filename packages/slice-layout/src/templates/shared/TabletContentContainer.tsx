import React, { ReactNode } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import {
  getDimensions,
  calculateContentWidth,
} from "@times-components-native/utils";

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

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
