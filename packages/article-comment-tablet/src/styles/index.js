import { StyleSheet } from "react-native";
import styleguide from "@times-components-native/styleguide";
const { colours, fontFactory, spacing } = styleguide();

const Styles = {
  mainContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
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
    paddingTop: spacing(8),
    paddingBottom: spacing(4),
    paddingRight: spacing(5),
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
    marginTop: spacing(8),
    width: "25%",
    zIndex: 1,
    borderRightWidth: 1,
    borderColor: colours.functional.keyline,
    height: "100%",
    paddingRight: spacing(2),
    position: "absolute",
  },
  authorContainer: {
    width: "100%",
    maxWidth: 200,
    paddingRight: spacing(3),
    paddingLeft: spacing(7),
  },
  bylines: {
    paddingTop: spacing(2),
    width: "100%",
  },
  topicsContainer: {
    position: "absolute",
    bottom: 60,
    paddingLeft: spacing(5),
    width: "100%",
  },
};

const styles = StyleSheet.create(Styles);

export default styles;
