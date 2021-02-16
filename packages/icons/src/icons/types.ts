import { PathProps } from "react-native-svg";

export interface IconProps {
  fillColour?: PathProps["fill"];
  height?: number;
  width?: number;
  opacity: number;
  strokeColour: string;
  title?: string;
}

export enum EMaskUnits {
  USER_SPACE_ON_USE = "userSpaceOnUse",
  OBJECT_BOUNDING_BOX = "objectBoundingBox",
}
