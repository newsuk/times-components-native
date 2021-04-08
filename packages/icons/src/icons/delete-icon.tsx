import React from "react";
import Svg, { G, Path } from "react-native-svg";
import functional from "@times-components-native/styleguide/src/colours/functional";

interface LeftChevronProps {
  color?: string;
  width?: number;
  height?: number;
}

const DeleteIcon: React.FC<LeftChevronProps> = ({
  color = functional.black,
  width = 13,
  height = 13,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 13 13">
      <G fill="none" fill-rule="evenodd" stroke-linecap="round">
        <G stroke={color}>
          <G>
            <G>
              <G>
                <Path
                  d="M0.591 0.591L12.409 12.409"
                  transform="translate(-616 -38) translate(0 -2) translate(165 29) translate(451 11) matrix(-1 0 0 1 13 0)"
                />
                <Path
                  d="M0.591 0.591L12.409 12.409"
                  transform="translate(-616 -38) translate(0 -2) translate(165 29) translate(451 11)"
                />
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default DeleteIcon;
