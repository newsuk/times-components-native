import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.smallTablet]: {
    portrait: 30,
    landscape: 30,
  },
  [editionBreakpoints.medium]: {
    portrait: 30,
    landscape: 30,
  },
  [editionBreakpoints.wide]: {
    portrait: 35,
    landscape: 30,
  },
  [editionBreakpoints.huge]: {
    portrait: 35,
    landscape: 35,
  },
};

export default (breakpoint, orientation) => ({
  container: {
    paddingHorizontal: spacing(2),
    paddingTop: spacing(2),
    paddingBottom: spacing(4),
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: fontSizeResolver[breakpoint][orientation],
    lineHeight: fontSizeResolver[breakpoint][orientation],
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
  },
});
