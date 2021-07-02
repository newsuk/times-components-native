import { createContext } from "react";
import { getDimensions } from "@times-components-native/utils";
import { calculateResponsiveContext } from "./calculateResponsiveContext";
import { ContextType } from "./types";

const { width, height, fontScale } = getDimensions();

export default createContext<ContextType>(
  calculateResponsiveContext(width, height, fontScale),
);
