import React from "react";
import Svg, { G, Mask, Path, Rect } from "react-native-svg";
import { EMaskUnits } from "@times-components-native/icons/src/icons/types";

interface LeftChevronProps {
  color?: string;
}

const LeftChevron: React.FC<LeftChevronProps> = ({ color = "white" }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Mask
        id="mask0"
        mask-type="alpha"
        maskUnits={EMaskUnits.USER_SPACE_ON_USE}
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <Path
          d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
          fill={color}
        />
      </Mask>
      <G mask="url(#mask0)">
        <Rect width="24" height="24" fill={color} />
      </G>
    </Svg>
  );
};

export default LeftChevron;
