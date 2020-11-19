import { StyleSheet } from "react-native";
import {
  spacing,
  tabletRowPadding,
  tabletWidth,
  tabletWidthMax,
} from "@times-components-native/styleguide";

const containerShared = {
  alignSelf: "center",
  width: tabletWidth - tabletRowPadding,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    overflow: "visible",
    borderWidth: 1,
  },
  fullwidthCaption: {
    alignSelf: "center",
    maxWidth: tabletWidth - tabletRowPadding,
    borderWidth: 1,
  },
  fullwidthContainer: {
    marginBottom: spacing(2),
    marginHorizontal: "auto",
    maxWidth: tabletWidthMax,
  },
  inlineCaption: {
    paddingTop: spacing(2),
  },
  inlineContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    paddingBottom: spacing(5),
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    width: "100%",
  },
  inlineContainerTablet: {
    ...containerShared,
    flexDirection: "column",
    marginTop: 0,
    paddingBottom: 0,
    paddingLeft: spacing(0),
    paddingTop: 0,
    width: "100%",
  },
  inlineContainerNarrow: {
    paddingLeft: spacing(2),
  },
  inlineImage: {
    width: "100%",
  },
  primaryContainer: {
    flexDirection: "column",
    paddingBottom: spacing(3),
    width: "100%",
  },
  primaryContainerTablet: {
    ...containerShared,
  },
  primaryContainerNarrow: {
    alignSelf: "flex-start",
    paddingLeft: spacing(2),
  },
  secondaryCaption: {
    paddingLeft: spacing(2),
    paddingTop: 0,
    width: "50%",
  },
  secondaryContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    paddingBottom: spacing(4),
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    width: "100%",
  },
  secondaryContainerTablet: {
    ...containerShared,
    paddingLeft: spacing(0),
    paddingRight: spacing(0),
  },
  secondaryContainerNarrow: {
    alignSelf: "flex-start",
    paddingLeft: spacing(2),
  },
  secondaryImage: {
    width: "50%",
  },
});

export default styles;
