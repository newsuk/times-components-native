import React, { useState } from "react";
import { View } from "react-native";

interface Props {
  render: (whiteSpaceHeight: number) => any;
}
export const MeasureContainer: React.FC<Props> = (props) => {
  const [whiteSpaceHeight, setWhiteSpaceHeight] = useState(0);

  return (
    <View
      style={{ flex: 1 }}
      onLayout={(e) => {
        let height = e.nativeEvent.layout.height;
        setWhiteSpaceHeight(height);
      }}
    >
      {props.render(whiteSpaceHeight)}
    </View>
  );
};
