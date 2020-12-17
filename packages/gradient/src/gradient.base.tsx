import React, { FC, useState } from "react";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { LayoutChangeEvent, StyleProp, View, ViewProps } from "react-native";
import styles from "./styles";
import {
  getRGBAndOpacityFromRGBA,
  angleToPoints,
} from "@times-components-native/gradient/src/utils";

export const defaultProps = {
  children: null,
  degrees: 265,
  endPoint: "1",
  startPoint: "0",
  style: null,
};

export interface GradientBaseProps {
  children?: JSX.Element;
  height?: number;
  width?: number;
  style?: StyleProp<ViewProps>;
  degrees?: number;
  endColour: string;
  endPoint?: string;
  startColour: string;
  startPoint: string;
}

const GradientBase: FC<GradientBaseProps> = ({
  children = null,
  height = 0,
  width = 0,
  style = {},
  degrees = 265,
  endPoint = "1",
  startPoint = "0",
  startColour,
  endColour,
}) => {
  const [dimensions, setDimensions] = useState({
    width: width,
    height: height,
  });

  const handleOnLayout = ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
    if (!dimensions.width || !dimensions.height) {
      setDimensions({
        height: layout.height,
        width: layout.width,
      });
    }
  };

  const { start, end } = angleToPoints(((degrees + 90) / 180) * Math.PI);

  return (
    <View
      onLayout={handleOnLayout}
      style={[
        { height: dimensions.height, width: dimensions.width },
        styles.container,
        style,
      ]}
    >
      <Svg
        height={dimensions.height}
        width={dimensions.width}
        style={styles.surface}
      >
        <Defs>
          <LinearGradient
            id="gradSVG"
            x1={start.x}
            x2={end.x}
            y1={start.y}
            y2={end.y}
          >
            <Stop
              offset={startPoint}
              stopColor={getRGBAndOpacityFromRGBA(startColour).color}
              stopOpacity={`${getRGBAndOpacityFromRGBA(startColour).opacity}`}
            />
            <Stop
              offset={endPoint}
              stopColor={getRGBAndOpacityFromRGBA(endColour).color}
              stopOpacity={`${getRGBAndOpacityFromRGBA(endColour).opacity}`}
            />
          </LinearGradient>
        </Defs>
        <Rect
          fill="url(#gradSVG)"
          x={start.x}
          y={start.y}
          width={dimensions.width}
          height={dimensions.height}
        />
        {children}
      </Svg>
    </View>
  );
};

export default GradientBase;
