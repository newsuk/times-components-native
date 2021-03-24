const editionBreakpoints = {
  huge: "huge",
  medium: "medium",
  smallTablet: "smallTablet",
  small: "small",
  wide: "wide",
};

const editionBreakpointWidths = {
  smallTablet: 600,
  medium: 768,
  huge: 1366,
  wide: 1024,
};
const editionMaxWidth = editionBreakpointWidths.huge;
const sliceContentMaxWidth = 1180;

const narrowArticleWidths = {
  medium: {
    container: 853,
    content: 545,
  },
  wide: {
    container: 900,
    content: 638,
  },
  huge: {
    container: 1025,
    content: 700,
  },
};

export default {
  small: 520,
  smallTablet: 600,
  medium: 768,
  wide: 1024,
  huge: 1320,
  nativeTablet: 660,
  nativeTabletWide: 1366,
};

export {
  editionBreakpoints,
  editionMaxWidth,
  editionBreakpointWidths,
  sliceContentMaxWidth,
  narrowArticleWidths,
};
