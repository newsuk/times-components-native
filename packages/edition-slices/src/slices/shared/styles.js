import {
  editionMaxWidth,
  sliceContentMaxWidth,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const tabletPaddingHorizontalResolver = {
  [editionBreakpoints.small]: 0,
  [editionBreakpoints.smallTablet]: 0,
  // [editionBreakpoints.smallTablet]: spacing(2),
  [editionBreakpoints.medium]: spacing(2),
  [editionBreakpoints.wide]: spacing(6),
  [editionBreakpoints.huge]: spacing(2),
};

export default (isTablet, breakpoint) => ({
  contentWrapperStyles: {
    flex: 1,
    alignSelf: "center",
    width: sliceContentMaxWidth,
  },

  gutterStyles: {
    alignSelf: "center",
    maxWidth: "100%",
    paddingHorizontal: isTablet
      ? tabletPaddingHorizontalResolver[breakpoint]
      : 0,
    width: editionMaxWidth,
  },
});
