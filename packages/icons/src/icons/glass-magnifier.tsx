import React, { FC } from "react";
import Svg, { G, Mask, Path, Rect } from "react-native-svg";
import { EMaskUnits } from "@times-components-native/icons/src/icons/types";

const GlassMagnifier: FC = () => (
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
        d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5C7.01 5 5 7.01 5 9.5Z"
        fill="#FFFFFF"
      />
    </Mask>
    <G mask="url(#mask0)">
      <Rect width="24" height="24" fill="white" />
    </G>
  </Svg>
);


export default GlassMagnifier;
