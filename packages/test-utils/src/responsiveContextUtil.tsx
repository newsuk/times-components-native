import { ResponsiveContext } from "@times-components-native/responsive";
import { calculateResponsiveContext } from "@times-components-native/responsive/src/calculateResponsiveContext";
import React from "react";

const height = 400;
const fontScale = 1;

const withResponsiveContext = (WrappedComponent: any, width: number) => (
  <ResponsiveContext.Provider
    value={calculateResponsiveContext(width, height, fontScale)}
  >
    {WrappedComponent}
  </ResponsiveContext.Provider>
);

export const withTabletContext = (WrappedComponent: any) =>
  withResponsiveContext(WrappedComponent, 1000);

export const withMobileContext = (WrappedComponent: any) =>
  withResponsiveContext(WrappedComponent, 300);
