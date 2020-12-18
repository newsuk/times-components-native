import { PathProps } from "react-native-svg";

export interface IconProps {
  fillColour?: PathProps["fill"];
  height?: number;
  width?: number;
  opacity: number;
  strokeColour: string;
  title?: string;
}
