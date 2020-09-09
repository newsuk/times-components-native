import React, { ReactNode } from "react";
import { Dimensions, View } from "react-native";

type Props = {
  children: ReactNode;
  style: Record<string, string>;
};

function calculateContentWidth(windowWidth: number) {
  if (windowWidth >= 1366) return 1140;
  if (windowWidth >= 1194) return 1024;
  if (windowWidth >= 1080) return 1000;
  if (windowWidth >= 1024) return 920;
  if (windowWidth >= 810) return 730;

  return 688;
}

const TabletContentContainer = ({ style, children }: Props) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          width: calculateContentWidth(windowWidth),
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
