import React, { FC } from "react";
import Svg, { G, Mask, Path, Rect } from "react-native-svg";
import { EMaskUnits } from "./types";

const CloseRoundIcon: FC = () => {
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12ZM15.59 17L17 15.59L13.41 12L17 8.41L15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0)">
        <Rect width="24" height="24" fill="white" />
      </G>
    </Svg>
  );
};

export default CloseRoundIcon;
