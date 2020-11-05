import React, { useContext, useEffect, useState } from "react";
// @ts-ignore
import {
  getDimensions,
  addDimensionsListener,
  removeDimensionsListener,
} from "@times-components-native/utils";
import { ScaledSize } from "react-native";
import ResponsiveContext from "./context";
import { calculateResponsiveContext } from "./calculateResponsiveContext";

type DimensionChangeEvent = {
  window: ScaledSize;
};

const ResponsiveProvider: React.FC = ({ children }) => {
  const { fontScale, width, height } = getDimensions();

  const [state, setState] = useState(
    calculateResponsiveContext(width, height, fontScale),
  );

  const onDimensionChange = ({
    window: { fontScale, width, height },
  }: DimensionChangeEvent) => {
    const { fontScale: oldScale, windowWidth: oldWidth } = state;
    if (fontScale !== oldScale || (oldWidth && width !== oldWidth)) {
      setState(calculateResponsiveContext(width, height, fontScale));
    }
  };

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
