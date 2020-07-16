import { spacing, colours } from "@times-components-native/styleguide";
import { maxWidth } from "../gutter";

const globalStyle = {
  articleContainer: {
    backgroundColor: colours.functional.gutter,
    marginLeft: "25%",
    position: "relative",
    top: -30,
  },
  articleMainContentRow: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2)
  },
  gutter: {
    backgroundColor: "#ffffff",
    maxWidth: "100%",
    width: maxWidth,
    // borderWidth: 1,
    // borderColor: "orange",
  }
};

export default globalStyle;
