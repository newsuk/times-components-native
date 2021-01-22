import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

export default (breakpoint, { headline: { fontSize } }) => {
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

  const mediumBreakpointStyles = {
    container: {
      ...sharedStyles.container,
      ...sharedStyles.imageContainer,
      padding: spacing(2),
    },
    headline: {
      ...sharedStyles.headline,
      fontSize: fontSize,
      lineHeight: fontSize,
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
      fontSize: fontSize,
      lineHeight: fontSize,
    },
    summary: {
      ...globalSpacingStyles.tabletTeaser,
    },
  };

  const hugeBreakpointStyles = {
    ...wideBreakpointStyles,
    headline: {
      ...wideBreakpointStyles.headline,
      fontSize: fontSize,
      lineHeight: fontSize,
    },
  };

  const stylesResolver = {
    [editionBreakpoints.medium]: mediumBreakpointStyles,
    [editionBreakpoints.wide]: wideBreakpointStyles,
    [editionBreakpoints.huge]: hugeBreakpointStyles,
  };

  return stylesResolver[breakpoint];
};
