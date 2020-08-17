import React, { useState } from "react";
import { View } from "react-native";

interface Props {
  render: (dims: Dimensions) => any;
}

interface Dimensions {
  width: number;
  height: number;
}
export const MeasureContainer: React.FC<Props> = (props) => {
  const [
    containerDimensions,
    setContainerDimensions,
  ] = useState<Dimensions | null>(null);

  return (
    <View
      style={{ flex: 1 }}
      onLayout={(e) => {
        const { height, width } = e.nativeEvent.layout;
        setContainerDimensions({ height, width });
      }}
    >
      {containerDimensions ? props.render(containerDimensions) : null}
    </View>
  );
};
