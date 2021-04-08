import { StyleSheet } from "react-native";
import {
  colours,
  fontFactory,
  spacing,
} from "@times-components-native/styleguide";
import { isIOS } from "@times-components-native/utils/src/platformUtils";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.functional.white,
    flexDirection: "row",
    paddingLeft: spacing(3),
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: spacing(2),
    backgroundColor: colours.functional.grey,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  iconStyle: { marginTop: 1 },
  magnifierTextWrapper: { flexDirection: "row", width: "85%" },
  input: {
    marginLeft: spacing(2),
    paddingTop: isIOS ? 4 : 7,
    ...fontFactory({
      font: "supporting",
      fontSize: "body",
    }),

    backgroundColor: colours.functional.grey,
    color: colours.functional.black,
  },
});
