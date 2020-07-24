import {
  colours,
  fonts,
  fontFactory,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.small]: 18,
  [editionBreakpoints.medium]: 18,
  [editionBreakpoints.wide]: 28,
  [editionBreakpoints.huge]: 35,
};

const sharedStyles = {
  container: {
    backgroundColor: colours.functional.darkSupplement,
    flex: 1,
    padding: spacing(2),
  },
  content: {
    flexDirection: "row",
  },
  flagColour: {
    color: colours.functional.greyLabel,
  },
  headline: {
    ...fontFactory({
      font: "headline",
    }),
    color: colours.functional.white,
  },
  imageContainer: {
    flex: 1,
  },
  summary: {
    color: colours.functional.greyLabel,
  },
  strapline: {
    fontSize: 14,
  },
  summaryContainer: {
    paddingLeft: spacing(2),
    flex: 1,
  },
};

const smallBreakpointStyles = {
  ...sharedStyles,
  container: {
    ...sharedStyles.container,
    marginLeft: spacing(1),
  },
  headline: {
    ...sharedStyles.headline,
    fontSize: fontSizeResolver[editionBreakpoints.small],
    lineHeight: fontSizeResolver[editionBreakpoints.small],
    marginBottom: spacing(1),
  },
  strapline: {
    ...sharedStyles.strapline,
    marginBottom: spacing(1),
  },
};

const mediumBreakpointStyles = {
  ...sharedStyles,
  headline: {
    ...sharedStyles.headline,
    fontSize: fontSizeResolver[editionBreakpoints.medium],
    lineHeight: fontSizeResolver[editionBreakpoints.medium],
  },
  strapline: {
    ...sharedStyles.strapline,
    fontFamily: fonts.bodyRegular,
    lineHeight: 20,
    color: colours.functional.greyLabel,
  },
};

const wideBreakpointStyles = {
  ...mediumBreakpointStyles,
  headline: {
    ...sharedStyles.headline,
    fontSize: fontSizeResolver[editionBreakpoints.wide],
    lineHeight: fontSizeResolver[editionBreakpoints.wide],
  },
};

const hugeBreakpointStyles = {
  ...mediumBreakpointStyles,
  headline: {
    ...sharedStyles.headline,
    fontSize: fontSizeResolver[editionBreakpoints.huge],
    lineHeight: fontSizeResolver[editionBreakpoints.huge],
    marginTop: spacing(1),
  },
};

const styleResolver = {
  [editionBreakpoints.small]: smallBreakpointStyles,
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: hugeBreakpointStyles,
};

export default (breakpoint) => styleResolver[breakpoint];
