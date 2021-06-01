import { StyleSheet } from "react-native";
import {
  colours,
  fontFactory,
  spacing,
} from "@times-components-native/styleguide";
import { isIOS } from "@times-components-native/utils/src/platformUtils";
import { tabletWidth } from "@times-components-native/styleguide";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.functional.white,
    flexDirection: "row",
    paddingLeft: spacing(2),
    marginBottom: spacing(2),
    justifyContent: "center",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    paddingVertical: spacing(2),
    paddingHorizontal: spacing(2),
    backgroundColor: colours.functional.grey,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: tabletWidth,
  },
  iconStyle: { marginTop: 1, transform: [{ scaleX: -1 }] },
  magnifierTextWrapper: { flexDirection: "row", width: "85%" },
  input: {
    marginLeft: spacing(2),
    paddingTop: isIOS ? 4 : 7,
    ...fontFactory({
      font: "supporting",
      fontSize: "body",
    }),
    width: "100%",
    backgroundColor: colours.functional.grey,
    color: colours.functional.black,
  },
  chevron: { marginTop: spacing(2) },
});
