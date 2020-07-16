import styleguide, { tabletWidth, narrowArticleContentWidth } from "@times-components-native/styleguide";

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
    width: "100%",
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
    maxWidth: narrowArticleContentWidth,
    borderWidth: 1,
  },
  container: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2)
  },
  label: {
    marginBottom: spacing(2)
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
    width: "25%",    
    zIndex: 1111,
    borderRightWidth: 1,
    borderColor: colours.functional.keyline,
    height: "100%",
    paddingLeft: 40,
    position: "absolute",
    borderWidth: 1,
    borderColor: "blue"
  },
  authorImage: {
    width: 130,
    marginLeft: 30,
  },
  bylines: {
    paddingTop: spacing(1),
    width: "100%",
  }
};

export default sharedStyles;
