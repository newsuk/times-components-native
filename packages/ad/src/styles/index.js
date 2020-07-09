import { StyleSheet } from "react-native";
import { spacing } from "@tcn/styleguide";
import baseStyles from "./index.shared";

export default StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    marginTop: -spacing(4)
  },
  containerAdditionalHeight: {
    height: spacing(8)
  }
});

export { calculateViewBox, calculateViewportVisible } from "./index.shared";
