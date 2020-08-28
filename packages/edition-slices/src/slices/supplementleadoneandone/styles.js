import {
  colours,
  editionBreakpoints,
  fonts,
  spacing,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 35,
  [editionBreakpoints.wide]: 40,
  [editionBreakpoints.huge]: 45,
};

export default (breakpoint) => ({
  headlineStyle: {
    fontFamily: fonts.headlineRegular,
    fontSize: fontSizeResolver[breakpoint],
    color: colours.functional.brandColour,
    marginTop: spacing(1),
  },
});
