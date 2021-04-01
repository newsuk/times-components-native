import { StyleSheet } from "react-native";
import { colours, fontFactory } from "@times-components-native/styleguide";
import { isIOS } from "@times-components-native/utils/src/platformUtils";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    backgroundColor: colours.functional.backgroundTertiary,
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 8,
    marginVertical: 8,
  },
  input: {
    ...fontFactory({
      font: "supporting",
      fontSize: "body",
    }),
    lineHeight: 22,
    padding: 4,
    paddingLeft: 30,
    backgroundColor: isIOS
      ? colours.functional.transparentWhite
      : colours.functional.backgroundTertiary,
    color: colours.functional.white,
  },
});
