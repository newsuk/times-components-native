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
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  },
  containerWithMargin: {
    marginBottom: 65,
  },
  datePublication: {
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMeta",
    }),
    color: colours.functional.secondary,
    marginTop: spacing(1),
  },
  header: {
    marginBottom: spacing(3),
    paddingBottom: spacing(4),
    paddingTop: spacing(7),
  },
  label: {
    marginBottom: spacing(2),
  },
  meta: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  metaContainer: {
    alignItems: "center",
    width: "100%",
    paddingVertical: spacing(2),
    borderBottomColor: colours.functional.keyline,
    borderBottomWidth: 1,
    borderTopColor: colours.functional.keyline,
    borderTopWidth: 1,
    zIndex: 10,
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
