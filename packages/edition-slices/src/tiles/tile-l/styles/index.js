import {
  fonts,
  spacing,
  editionBreakpoints,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.small]: 20,
  [editionBreakpoints.medium]: 18,
  [editionBreakpoints.wide]: 20,
  [editionBreakpoints.huge]: 22,
};

export default (breakpoint) => ({
  container: {
    flex: 1,
    padding: spacing(2),
  },
  headlineStyle: {
    fontFamily: fonts.headline,
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
    marginBottom:
      breakpoint === editionBreakpoints.small ? spacing(1) : spacing(2),
  },
  summaryContainer: {
    flex: 1,
  },
});
