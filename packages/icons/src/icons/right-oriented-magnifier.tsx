import React, { FC } from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
import functional from "@times-components-native/styleguide/src/colours/functional";

interface GlassMagnifierProps {
  color?: string;
}

const RightOrientedGlassMagnifier: FC<GlassMagnifierProps> = ({
  color = functional.black,
}) => (
  <Svg width="22" height="20" viewBox="0 0 20 18">
    <G fill="none" fillRule="evenodd">
      <G stroke={color}>
        <G>
          <G transform="translate(-30 -63) translate(20 52) translate(10 8)">
            <Circle
              cx="11.268"
              cy="11.232"
              r="6.75"
              strokeWidth="1.5"
              transform="rotate(45 11.268 11.232)"
            />
            <Path
              strokeLinecap="round"
              strokeWidth="2"
              d="M5.611 16.889L2.782 19.718"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);
export default RightOrientedGlassMagnifier;
