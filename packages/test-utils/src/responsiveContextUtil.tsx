import { ResponsiveContext } from "@times-components-native/responsive";
import { calculateResponsiveContext } from "@times-components-native/responsive/src/calculateResponsiveContext";
import React from "react";

export const withTabletContext = (WrappedComponent: any) => (
  <ResponsiveContext.Provider value={calculateResponsiveContext(1000, 400, 1)}>
    {WrappedComponent}
  </ResponsiveContext.Provider>
);

export const withMobileContext = (WrappedComponent: any) => (
  <ResponsiveContext.Provider value={calculateResponsiveContext(300, 400, 1)}>
    {WrappedComponent}
  </ResponsiveContext.Provider>
);
