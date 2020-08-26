import {
  colours,
  editionBreakpoints,
  fonts,
  fontSizes,
  spacing,
} from "@times-components-native/styleguide";

const smallBreakpointStyles = {
  container: {
    backgroundColor: colours.functional.newsletterPuffBackground,
    display: "flex",
    flexDirection: "column",
    marginHorizontal: spacing(2),
    marginBottom: spacing(4),
  },
  imageContainer: {},
  subscribedContainer: {
    justifyContent: "center",
    paddingVertical: spacing(9),
    paddingHorizontal: spacing(8),
  },
  subscribedHeadline: {
    color: colours.functional.brandColour,
    fontFamily: fonts.headline,
    textAlign: "center",
    fontSize: fontSizes.newsletterPuffHeadline,
    textDecoration: "none",
    marginBottom: spacing(2),
  },
  subscribedCopy: {
    fontFamily: fonts.body,
    fontSize: fontSizes.newsletterPuffCopy,
    textAlign: "center",
    color: colours.functional.primary,
    marginBottom: spacing(1),
    paddingVertical: 0,
    paddingHorizontal: spacing(1),
  },

  signUpContainer: {
    justifyContent: "center",
    padding: spacing(4),
  },
  signUpLabel: {
    fontFamily: fonts.supporting,
    fontSize: fontSizes.newsletterPuffLabel,
    letterSpacing: 1,
    color: colours.functional.brandColour,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: spacing(1),
  },
  signUpHeadline: {
    color: colours.functional.brandColour,
    fontFamily: fonts.headline,
    textAlign: "center",
    fontSize: fontSizes.newsletterPuffHeadline,
    textDecoration: "none",
    marginBottom: spacing(1),
  },
  copy: {
    fontFamily: fonts.body,
    fontSize: fontSizes.newsletterPuffCopy,
    textAlign: "center",
    color: colours.functional.primary,
    marginBottom: spacing(3),
  },
  signUpCTAContainer: {},
  preferencesContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  preferencesText: {
    color: colours.functional.action,
  },
  preferencesView: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    paddingLeft: 8,
    margin: "auto",
  },
};
const mediumBreakpointStyles = {
  ...smallBreakpointStyles,
  container: {
    ...smallBreakpointStyles.container,
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: spacing(4),
    width: "80.8%",
  },
  imageContainer: {
    ...smallBreakpointStyles.imageContainer,
    width: "45%",
  },
  subscribedContainer: {
    ...smallBreakpointStyles.subscribedContainer,
    paddingVertical: spacing(0),
    paddingHorizontal: spacing(1),
    flex: 1,
  },
  subscribedCopy: {
    ...smallBreakpointStyles.subscribedCopy,
    paddingHorizontal: spacing(4),
  },
  signUpContainer: {
    ...smallBreakpointStyles.signUpContainer,
    flex: 1,
  },
  signUpCTAContainer: {
    ...smallBreakpointStyles.signUpCTAContainer,
    width: 220,
    marginLeft: "auto",
    marginRight: "auto",
  },
};
const wideBreakpointStyles = {
  ...mediumBreakpointStyles,
  container: { ...mediumBreakpointStyles.container, width: "56.2%" },
};
const hugeBreakpointStyle = { ...wideBreakpointStyles };

const stylesResolver = {
  [editionBreakpoints.small]: smallBreakpointStyles,
  [editionBreakpoints.medium]: mediumBreakpointStyles,
  [editionBreakpoints.wide]: wideBreakpointStyles,
  [editionBreakpoints.huge]: hugeBreakpointStyle,
};

export const styleFactory = (breakpoint) => stylesResolver[breakpoint];

export const buttonStyles = {
  alignItems: "center",
  backgroundColor: "transparent",
  borderColor: colours.functional.brandColour,
  borderStyle: "solid",
  borderWidth: 2,
  color: colours.functional.brandColour,
  elevation: 0,
  fontFamily: fonts.supporting,
  height: 45,
  justifyContent: "center",
  letterSpacing: 0.2,
  width: "100%",
};

export const textStyle = {
  color: colours.functional.brandColour,
};
