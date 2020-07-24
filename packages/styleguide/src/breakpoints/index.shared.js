const editionBreakpoints = {
  huge: "huge",
  medium: "medium",
  small: "small",
  wide: "wide",
};

const editionBreakpointWidths = {
  huge: 1366,
  medium: 768,
  wide: 1024,
};
const editionMaxWidth = editionBreakpointWidths.huge;
const sliceContentMaxWidth = 1180;

const narrowArticleWidths = {
  medium: {
    container: 853,
    content: 580,
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
  huge: 1320,
  medium: 768,
  nativeTablet: 660,
  nativeTabletWide: 1194,
  small: 520,
  wide: 1024,
};
export {
  editionBreakpoints,
  editionMaxWidth,
  editionBreakpointWidths,
  sliceContentMaxWidth,
  narrowArticleWidths,
};
