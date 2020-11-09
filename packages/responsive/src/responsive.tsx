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
  initialHeight?: number | undefined;
  initialWidth?: number | undefined;
  initialFontScale?: number | undefined;
}

const ResponsiveProvider: React.FC<Props> = ({
  children,
  initialWidth,
  initialHeight,
  initialFontScale,
}) => {
  const { fontScale, width, height } =
    initialWidth && initialHeight && initialFontScale
      ? {
          width: initialWidth,
          height: initialHeight,
          fontScale: initialFontScale,
        }
      : getDimensions();

  const [state, setState] = useState(
    calculateResponsiveContext(width, height, fontScale),
  );

  const onDimensionChange = ({
    window: { fontScale, width, height },
  }: DimensionChangeEvent) =>
    setState(calculateResponsiveContext(width, height, fontScale));

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
