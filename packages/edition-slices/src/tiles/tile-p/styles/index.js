import {
  colours,
  fonts,
  fontSizes,
  spacing,
} from "@times-components-native/styleguide";

const styles = {
  byline: {
    color: colours.section.comment,
    fontFamily: fonts.supporting,
    fontSize: fontSizes.cardMetaMobile,
    letterSpacing: 0.6,
    lineHeight: 12,
    textTransform: "uppercase",
  },
  container: {
    alignItems: "center",
    paddingTop: spacing(4),
    paddingBottom: spacing(2),
  },
  headline: {
    color: colours.functional.brandColour,
    fontFamily: fonts.headline,
    fontSize: fontSizes.tileLeadHeadline,
    lineHeight: 35,
    paddingHorizontal: spacing(2),
    textAlign: "center",
  },
  imageContainer: {
    overflow: "hidden",
    width: "30%",
    marginBottom: spacing(3),
  },
  strapline: {
    fontFamily: fonts.bodyRegular,
    color: colours.functional.secondary,
    fontSize: fontSizes.meta,
    lineHeight: 20,
    paddingHorizontal: spacing(8),
    textAlign: "center",
  },
  summaryContainer: {
    alignItems: "center",
    paddingTop: spacing(2),
    paddingBottom: spacing(3),
  },
};

export default styles;
