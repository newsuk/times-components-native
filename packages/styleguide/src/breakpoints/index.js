import { NativeModules } from "react-native";

import widths, {
  editionBreakpoints,
  editionMaxWidth,
  editionBreakpointWidths,
  sliceContentMaxWidth,
  narrowArticleWidths,
} from "./index.shared";

const config = (NativeModules || {}).ReactConfig;

const getEditionBreakpoint = (width) => {
  if (config && config.breakpoint) {
    return config.breakpoint;
  }
  if (width < editionBreakpointWidths.medium) {
    return editionBreakpoints.small;
  }
  if (width < editionBreakpointWidths.wide) {
    return editionBreakpoints.medium;
  }
  if (width < editionBreakpointWidths.huge) {
    return editionBreakpoints.wide;
  }
  return editionBreakpoints.huge;
};

const getNarrowArticleBreakpoint = (width) => {
  if (config && config.breakpoint) {
    return config.breakpoint;
  }
  if (width < editionBreakpointWidths.medium) {
    return narrowArticleWidths.small;
  }
  if (width < editionBreakpointWidths.wide) {
    return narrowArticleWidths.medium;
  }
  if (width < editionBreakpointWidths.huge) {
    return narrowArticleWidths.wide;
  }
  return narrowArticleWidths.huge;
};

export {
  editionBreakpoints,
  editionMaxWidth,
  editionBreakpointWidths,
  sliceContentMaxWidth,
  getEditionBreakpoint,
  getNarrowArticleBreakpoint,
};

export default widths;
