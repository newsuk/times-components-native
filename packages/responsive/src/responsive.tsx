import React, { useContext, useEffect, useState } from "react";
import {
  getDimensions,
  addDimensionsListener,
  removeDimensionsListener,
} from "@times-components-native/utils";
import { ScaledSize } from "react-native";
import ResponsiveContext from "./context";
import { calculateResponsiveContext } from "./calculateResponsiveContext";

interface DimensionChangeEvent {
  window: ScaledSize;
}

interface Props {
  contentSize?: {
    width: number;
    height: number;
  };
  displayHeight?: number | undefined;
  displayWidth?: number | undefined;
  fontScale?: number | undefined;
}

const ResponsiveProvider: React.FC<Props> = ({
  children,
  displayWidth,
  displayHeight,
  contentSize,
  fontScale: initialFontScale,
}) => {
  const { fontScale, width, height } =
    displayWidth && displayHeight && initialFontScale
      ? {
          width: displayWidth,
          height: displayHeight,
          fontScale: initialFontScale,
        }
      : getDimensions();

  const [state, setState] = useState(
    calculateResponsiveContext(width, height, fontScale, contentSize),
  );

  const onDimensionChange = ({
    window: { fontScale, width, height },
  }: DimensionChangeEvent) =>
    setState(calculateResponsiveContext(width, height, fontScale, contentSize));

  useEffect(() => {
    const listener = addDimensionsListener("change", onDimensionChange);

    return () => {
      removeDimensionsListener("change", listener);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={state}>
      {children}
    </ResponsiveContext.Provider>
  );
};

const useResponsiveContext = () => useContext(ResponsiveContext);

export { ResponsiveContext, useResponsiveContext };
export default ResponsiveProvider;
