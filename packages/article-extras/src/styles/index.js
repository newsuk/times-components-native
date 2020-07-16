import { StyleSheet } from "react-native";
import {
  colours,
  fontFactory,
  spacing,
  tabletWidth,
  narrowArticleContentWidth
} from "@times-components-native/styleguide";

const styles = StyleSheet.create({
  extrasErrorBody: {
    ...fontFactory({
      font: "supporting",
      fontSize: "tertiary"
    }),
    color: colours.functional.secondary,
    maxWidth: 330,
    textAlign: "center"
  },
  extrasErrorButton: {
    marginBottom: spacing(0),
    marginTop: spacing(5),
    maxWidth: 165
  },
  extrasErrorContainer: {
    alignItems: "center",
    borderStyle: "solid",
    borderTopColor: colours.functional.keyline,
    borderTopWidth: 1,
    marginBottom: spacing(10),
    width: "100%"
  },
  extrasErrorHeadline: {
    color: colours.functional.primary,
    ...fontFactory({
      font: "headline",
      fontSize: "commentsHeadline"
    }),
    maxWidth: 315,
    paddingBottom: spacing(2),
    paddingTop: spacing(6),
    textAlign: "center"
  },
  extrasTablet: {
    alignSelf: "center",
    maxWidth: tabletWidth,
    marginLeft: 0, 
    width: "100%",
    borderWidth: 1,
    borderColor: "orange"
  },
  narrowContent: {
    alignSelf: "flex-start",
    marginLeft: "25%",
    maxWidth: narrowArticleContentWidth,
    borderColor: "blue"
  }
});

export default styles;
