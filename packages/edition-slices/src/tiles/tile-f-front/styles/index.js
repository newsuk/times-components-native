import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
  colours,
} from "@times-components-native/styleguide";

const mediumBreakpointStyles = {
  containerLandscape: {
    paddingBottom: spacing(2),
    flex: 1,
    flexDirection: "row-reverse",
  },
  containerPortrait: {
    paddingBottom: 0,
    flex: 1,
    flexDirection: "column",
  },
  headlineLandscape: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: 40,
    lineHeight: 40,
  },
  headlinePortrait: {
    ...globalSpacingStyles.tabletHeadline,
    marginBottom: 5,
    fontFamily: fonts.headline,
    fontSize: 40,
    lineHeight: 40,
  },
  strapline: {
    fontFamily: fonts.headlineRegular,
    color: colours.functional.primary,
    fontSize: 24,
    lineHeight: 26,
  },
  bylineContainer: {
    marginBottom: spacing(3),
  },
  summaryContainerLandscape: {
    width: "25%",
    paddingRight: spacing(4),
  },
  imageContainerLandscape: {
    width: "75%",
    marginBottom: spacing(2),
  },
  imageContainerPortrait: {
    width: "100%",
    marginBottom: spacing(2),
  },
  summaryLandscape: {
    ...globalSpacingStyles.tabletTeaser,
    textAlign: "justify",
    fontSize: 14,
    lineHeight: 18,
  },
  summaryPortrait: {
    ...globalSpacingStyles.tabletTeaser,
    textAlign: "justify",
    fontSize: 14,
    lineHeight: 18,
  },
};

const wideBreakpointStyles = {
  ...mediumBreakpointStyles,
  headlineLandscape: {
    ...mediumBreakpointStyles.headlineLandscape,
    fontSize: 35,
    lineHeight: 35,
  },
  headlinePortrait: {
    ...mediumBreakpointStyles.headlinePortrait,
    fontSize: 50,
    lineHeight: 50,
  },
  summaryPortrait: {
    ...mediumBreakpointStyles.summaryPortrait,
    fontSize: 16,
    lineHeight: 20,
  },
};

const hugeBreakpointStyles = {
  ...wideBreakpointStyles,
  headlineLandscape: {
    ...wideBreakpointStyles.headlineLandscape,
    fontSize: 45,
    lineHeight: 45,
  },
};

const stylesResolver = {
  [editionBreakpoints.small]: {},
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: hugeBreakpointStyles,
};

const sharedStyles = {
  imageContainer: {
    width: "100%",
    marginBottom: spacing(2),
  },
};

const sharedLandscapeStyles = {
  ...sharedStyles,
  container: {
    paddingBottom: spacing(2),
    flex: 1,
    flexDirection: "row-reverse",
  },
};

const sharedPortraitStyles = {
  ...sharedStyles,
  container: {
    paddingBottom: 0,
    flex: 1,
    flexDirection: "column",
  },
};

const styles = {
  landscape: {
    "1024": {
      ...sharedLandscapeStyles,
    },
  },
  portrait: {
    "768": {
      ...sharedPortraitStyles,
      headline: {
        ...globalSpacingStyles.tabletHeadline,
        fontFamily: fonts.headline,
        fontSize: 42,
        lineHeight: 42,
        marginBottom: spacing(1),
      },
      summary: {
        ...globalSpacingStyles.tabletTeaser,
        textAlign: "justify",
        fontSize: 14,
        lineHeight: 18,
      },
      strapline: {
        fontFamily: fonts.headlineRegular,
        color: colours.functional.primary,
        fontSize: 24,
        lineHeight: 24,
      },
    },
  },
};

export default (breakpoint) => stylesResolver[breakpoint];

export const getStyle = (orientation, windowWidth) => {
  if (windowWidth >= 768) {
    return styles[orientation]["768"];
  }

  return styles[orientation]["768"];
};
