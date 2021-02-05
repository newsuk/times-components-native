import { ResponsiveContext } from "@times-components-native/responsive";
import { calculateResponsiveContext } from "@times-components-native/responsive/src/calculateResponsiveContext";
import React from "react";

const withResponsiveContext = (WrappedComponent: any, width: number) => (
  <ResponsiveContext.Provider
    value={calculateResponsiveContext(width, 400, 1, {
      width: 1024,
      height: 600,
    })}
  >
    {WrappedComponent}
  </ResponsiveContext.Provider>
);

export const withTabletContext = (WrappedComponent: any) =>
  withResponsiveContext(WrappedComponent, 1000);

export const withMobileContext = (WrappedComponent: any) =>
  withResponsiveContext(WrappedComponent, 300);
