import styleguide, { tabletWidth } from "@times-components-native/styleguide";

const { colours, fontFactory, spacing } = styleguide();
const sharedStyles = {
  articleHeadline: {
    ...fontFactory({
      font: "headline",
      fontSize: "articleHeadline"
    }),
    color: colours.functional.brandColour,
    marginBottom: spacing(2),
  },
  authorImage: {
    marginBottom: spacing(5)
  },
  container: {
    alignSelf: "center",
    width: tabletWidth,
    paddingLeft: spacing(2),
    paddingRight: spacing(2)
  },
  datePublication: {
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMeta"
    }),
    color: colours.functional.secondary,
    marginTop: "auto"
  },
  header: {
    marginBottom: spacing(3),
    paddingBottom: spacing(4),
    paddingTop: spacing(7),
    width: tabletWidth,
    paddingLeft: "50%",
  },
  label: {
    marginBottom: spacing(2)
  },
  meta: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  metaContainer: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: spacing(2),
    borderBottomColor: colours.functional.keyline,
    borderBottomWidth: 1,
    borderTopColor: colours.functional.keyline,
    borderTopWidth: 1
  },
  standFirst: {
    ...fontFactory({
      font: "headlineRegular",
      fontSize: "smallestHeadline"
    }),
    color: colours.functional.primary,
    marginBottom: spacing(3),
  },
  leftColumnContainer: {
    left: 40,
    width: 197,
    height: 200,
    borderWidth: 1,
    borderColor: "blue"
  }
};

export default sharedStyles;
