import { StyleSheet } from "react-native";
import { colours } from "@times-components-native/styleguide";
import {TimesModern} from "../../../../../app/utils/fonts";

export const styles = StyleSheet.create({
  text: {
    fontFamily: TimesModern.Regular,
    color: colours.functional.secondary,
  },
  hightlighted: {
    color: colours.functional.black,
  },
});
