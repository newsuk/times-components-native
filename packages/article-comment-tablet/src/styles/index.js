import { StyleSheet } from "react-native";
import styleguide from "@times-components-native/styleguide";
const { colours, fontFactory, spacing } = styleguide();

const Styles = {
  mainContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  contentContainer: {
    marginLeft: "25%",
  },
  articleHeadline: {
    ...fontFactory({
      font: "headline",
      fontSize: "articleHeadline",
    }),
    color: colours.functional.brandColour,
    marginBottom: spacing(2.75),
  },
  datePublication: {
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMeta",
    }),
    color: colours.functional.secondary,
    marginTop: "auto",
  },
  header: {
    paddingBottom: spacing(4),
    paddingRight: spacing(5),
    marginTop: spacing(8),
    borderLeftWidth: 1,
    borderColor: colours.functional.keyline,
  },
  container: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  },
  label: {
    marginBottom: spacing(2),
  },
  metaContainer: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: spacing(2),
    marginTop: spacing(1),
    borderBottomColor: colours.functional.keyline,
    borderBottomWidth: 1,
    borderTopColor: colours.functional.keyline,
    borderTopWidth: 1,
  },
  standFirst: {
    ...fontFactory({
      font: "headlineRegular",
      fontSize: "smallestHeadline",
    }),
    lineHeight: 25,
    color: colours.functional.primary,
    marginBottom: spacing(3),
  },
  leftColumnContainer: {
    paddingTop: spacing(8),
    width: "25%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
  authorContainer: {
    width: "100%",
    maxWidth: 200,
    paddingRight: spacing(3),
    paddingLeft: spacing(7),
  },
  bylines: {
    marginTop: spacing(2),
    width: "100%",
  },
  topicsContainer: {
    position: "absolute",
    bottom: 60,
    paddingLeft: spacing(5),
    width: "100%",
  },
  leadAssetContainer: {
    paddingLeft: spacing(2),
    paddingBottom: spacing(4),
    paddingRight: spacing(7),
    borderLeftWidth: 1,
    borderColor: colours.functional.keyline,
  },
};

const styles = StyleSheet.create(Styles);

export default styles;
