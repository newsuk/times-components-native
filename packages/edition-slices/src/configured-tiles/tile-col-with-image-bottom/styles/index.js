import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.wide]: 30,
  [editionBreakpoints.huge]: 35,
  [editionBreakpoints.medium]: 20,
  [editionBreakpoints.small]: 25,
};

export default (
  breakpoint,
  customStyleOverrides = { fontSizes: fontSizeResolver },
) => {
  const sharedStyles = {
    container: {
      flex: 1,
      paddingHorizontal: spacing(2),
      paddingVertical: spacing(3),
    },
    headline: {
      ...globalSpacingStyles.tabletHeadline,
      fontFamily: fonts.headline,
    },
    imageContainer: {
      width: "100%",
      marginBottom: spacing(2),
    },
  };

  const smallBreakpointStyles = {
    container: {
      ...sharedStyles.container,
      ...sharedStyles.imageContainer,
      padding: spacing(2),
      paddingBottom: spacing(4),
    },
    headline: {
      ...sharedStyles.headline,
      fontSize: customStyleOverrides.fontSizes[breakpoint],
      lineHeight: customStyleOverrides.fontSizes[breakpoint],
      marginBottom: spacing(1),
    },
    summary: {
      marginBottom: spacing(1.75),
    },
  };

  const mediumBreakpointStyles = {
    container: {
      ...sharedStyles.container,
      ...sharedStyles.imageContainer,
      padding: spacing(2),
    },
    headline: {
      ...sharedStyles.headline,
      fontSize: customStyleOverrides.fontSizes[breakpoint],
      lineHeight: customStyleOverrides.fontSizes[breakpoint],
    },
    summary: {
      ...globalSpacingStyles.tabletTeaser,
    },
  };

  const wideBreakpointStyles = {
    container: {
      ...sharedStyles.container,
      padding: spacing(2),
    },
    imageContainer: {
      width: "100%",
      marginBottom: spacing(2),
    },
    headline: {
      ...sharedStyles.headline,
      fontSize: customStyleOverrides.fontSizes[breakpoint],
      lineHeight: customStyleOverrides.fontSizes[breakpoint],
    },
    summary: {
      ...globalSpacingStyles.tabletTeaser,
    },
  };

  const hugeBreakpointStyles = {
    ...wideBreakpointStyles,
    headline: {
      ...wideBreakpointStyles.headline,
      fontSize: customStyleOverrides.fontSizes[breakpoint],
      lineHeight: customStyleOverrides.fontSizes[breakpoint],
    },
  };

  const stylesResolver = {
    [editionBreakpoints.small]: smallBreakpointStyles,
    [editionBreakpoints.medium]: mediumBreakpointStyles,
    [editionBreakpoints.wide]: wideBreakpointStyles,
    [editionBreakpoints.huge]: hugeBreakpointStyles,
  };

  return stylesResolver[breakpoint];
};
