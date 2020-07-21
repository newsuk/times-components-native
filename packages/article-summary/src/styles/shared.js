import styleguide from "@times-components-native/styleguide";

const { colours, fontFactory, fonts, spacing } = styleguide();
const sharedStyles = {
  headline: {
    color: colours.functional.primary,
    fontFamily: fonts.headline,
    fontWeight: "900",
    backgroundColor: "orange",
    marginBottom: spacing(2),
  },
  headlineWrapper: {
    ...fontFactory({
      font: "headline",
      fontSize: "smallHeadline",
    }),
  },
  labelWrapper: {
    marginBottom: spacing(1),
    backgroundColor: "orange",
  },
  metaText: {
    color: colours.functional.secondary,
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMeta",
    }),
    marginBottom: spacing(1),
  },
  strapline: {
    ...fontFactory({
      font: "headlineRegular",
      fontSize: "strapline",
    }),
    color: colours.functional.secondary,
    backgroundColor: "orange",
    // paddingBottom: spacing(2),
    marginBottom: spacing(2),
  },
  text: {
    color: colours.functional.secondary,
    flexWrap: "wrap",
    marginBottom: spacing(2),
    ...fontFactory({
      font: "body",
      fontSize: "teaser",
    }),
  },
};

export default sharedStyles;
