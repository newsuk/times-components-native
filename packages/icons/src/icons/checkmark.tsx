import { colours } from "@times-components-native/styleguide";
import React from "react";
import Svg, { Path } from "react-native-svg";

interface CheckmarkProps {
  color?: string;
  width?: number;
  height?: number;
}

const Checkmark: React.FC<CheckmarkProps> = ({
  color = colours.functional.transparentBlack,
  width = 15,
  height = 15,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
      <Path
        fill="none"
        stroke={color}
        strokeLinecap={"square"}
        strokeMiterlimit={"10"}
        strokeWidth={"44"}
        d="M416 128L192 344l-96-96"
      />
    </Svg>
  );
};

export default Checkmark;
