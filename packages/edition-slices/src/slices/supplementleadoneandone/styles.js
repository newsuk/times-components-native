import {
  colours,
  editionBreakpoints,
  fonts,
} from "@times-components-native/styleguide";

const fontSizeResolver = {
  [editionBreakpoints.medium]: 40,
  [editionBreakpoints.wide]: 40,
  [editionBreakpoints.huge]: 45,
};

export default (breakpoint) => ({
  headlineStyle: {
    fontFamily: fonts.headlineRegular,
    fontSize: fontSizeResolver[breakpoint],
    lineHeight: fontSizeResolver[breakpoint],
    color: colours.functional.brandColour,
    fontWeight: "normal",
  },
});
