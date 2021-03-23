import styleguide from "@times-components-native/styleguide";

const { colours, fontFactory, spacing } = styleguide();
const sharedStyles = {
  articleHeadline: {
    ...fontFactory({
      font: "headline",
      fontSize: "headline",
    }),
    color: colours.functional.brandColour,
    marginBottom: spacing(2),
    textAlign: "center",
  },
  authorImage: {
    marginBottom: spacing(5),
  },
  container: {
    alignItems: "center",
    marginBottom: spacing(5),
    marginLeft: spacing(2),
    marginRight: spacing(2),
    paddingTop: spacing(7),
  },
  containerWithMargin: {
    marginBottom: 100,
  },
  datePublication: {
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMeta",
    }),
    color: colours.functional.secondary,
    marginTop: spacing(3),
  },
  label: {
    marginBottom: spacing(2),
  },
  leadAssetContainer: {
    marginBottom: spacing(4),
  },
  meta: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  metaContainer: {
    alignItems: "center",
  },
  separator: {
    borderRightColor: colours.functional.keyline,
    borderRightWidth: 1,
    height: spacing(3),
    marginHorizontal: spacing(2),
  },
  standFirst: {
    ...fontFactory({
      font: "headlineRegular",
      fontSize: "smallestHeadline",
    }),
    color: colours.functional.primary,
    marginBottom: spacing(3),
    paddingHorizontal: spacing(2),
    textAlign: "center",
  },
};

export default sharedStyles;
