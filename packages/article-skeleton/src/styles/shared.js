import { spacing, colours } from "@times-components-native/styleguide";
import { maxWidth } from "../gutter";

const globalStyle = {
  articleContainer: {
    backgroundColor: colours.functional.gutter,
  },
  narrow: {
    marginLeft: "25%",
    position: "relative",
  },
  articleMainContentRow: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  },
  gutter: {
    backgroundColor: "#ffffff",
    maxWidth: "100%",
    width: maxWidth,
  },
};

export default globalStyle;
