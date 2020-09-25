import styleguide from "@times-components-native/styleguide";

const { fonts, spacing, colours } = styleguide();

export default () => ({
  container: {
    paddingVertical: spacing(2),
    backgroundColor: colours.functional.biege,
    flex: 1,
  },
  titleContainer: {
    marginHorizontal: spacing(2),
    marginBottom: spacing(2),
    borderBottomWidth: 1,
    borderBottomColor: colours.functional.keyline,
    paddingBottom: spacing(2),
  },
  heading: {
    fontSize: 14,
    fontFamily: fonts.bodyRegular,
    color: colours.functional.brandColour,
  },
  itemsContainer: {
    marginHorizontal: spacing(1),
    flex: 1,
  },
  item: {
    flex: 1,
    paddingHorizontal: spacing(1),
  },
  itemTitle: {
    fontSize: 18,
    fontFamily: fonts.headline,
    color: colours.functional.brandColour,
    marginBottom: spacing(1),
  },
  itemStrapline: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: fonts.bodyRegular,
    color: colours.functional.brandColour,
    marginBottom: spacing(2),
  },
  itemLink: {
    fontSize: 14,
    fontFamily: fonts.supporting,
    color: colours.functional.red,
    textDecorationLine: "none",
    marginBottom: spacing(3),
  },
  divider: {
    paddingLeft: spacing(1),
    borderColor: colours.functional.keyline,
    borderLeftWidth: 1,
    marginLeft: spacing(1),
  },
  horizontalDivider: {
    borderBottomWidth: 1,
    borderColor: colours.functional.keyline,
    marginBottom: spacing(1),
  },
});
