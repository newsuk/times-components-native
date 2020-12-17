import React, { FC } from "react";
import Svg, { G, Path } from "react-native-svg";

export interface IconEmailProps {
  height: number;
  title?: string;
  width: number;
}

const IconEmail: FC<IconEmailProps> = ({
  height,
  title = "Email icon",
  width,
}) => (
  <Svg width={width} height={height} title={title}>
    <G fill="none" fillRule="evenodd">
      <Path
        fill="#B8B8B8"
        d="M0 7.006L10.463.342a.998.998 0 011.074 0L22 7.006V18H0V7.006z"
      />
      <Path fill="#FFF" d="M4 7h14v10H4z" />
      <Path fill="#CCC" d="M22 22.984L0 23V9z" />
      <Path fill="#C2C2C2" d="M0 22.984L22 23V9z" />
    </G>
  </Svg>
);

IconEmail.defaultProps = {};

export default IconEmail;
