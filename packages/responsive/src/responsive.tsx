import React, { useContext, useEffect, useState } from "react";
// @ts-ignore
import {
  getDimensions,
  addDimensionsListener,
  removeDimensionsListener,
} from "@times-components-native/utils";
import { ScaledSize } from "react-native";
import ResponsiveContext from "./context";
import { calculateState } from "./calculateState";

type DimensionChangeEvent = {
  window: ScaledSize;
};

const ResponsiveProvider: React.FC = ({ children }) => {
  const { fontScale, width, height } = getDimensions();

  const [state, setState] = useState(calculateState(width, height, fontScale));

  const onDimensionChange = ({
    window: { fontScale, width, height },
  }: DimensionChangeEvent) => {
    const { fontScale: oldScale, windowWidth: oldWidth } = state;
    if (fontScale !== oldScale || (oldWidth && width !== oldWidth)) {
      setState(calculateState(width, height, fontScale));
    }
  };

  useEffect(() => {
    const listener = addDimensionsListener("change", onDimensionChange);

    return () => {
      removeDimensionsListener("change", listener);
    };
  });

  return (
    <ResponsiveContext.Provider value={state}>
      {children}
    </ResponsiveContext.Provider>
  );
};

const useResponsiveContext = () => useContext(ResponsiveContext);

export { ResponsiveContext, useResponsiveContext };
export default ResponsiveProvider;
