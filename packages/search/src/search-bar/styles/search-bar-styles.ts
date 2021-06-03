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
    alignItems: "center",
    backgroundColor: colours.functional.white,
    marginBottom: spacing(2),
    width: "100%",
  },
  subContainer: {
    flexDirection: "row",
    maxWidth: tabletWidth,
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    paddingVertical: spacing(2),
    paddingHorizontal: spacing(2),
    backgroundColor: colours.functional.grey,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
