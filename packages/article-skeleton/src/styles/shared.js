import { spacing, colours } from "@times-components-native/styleguide";
import { maxWidth } from "../gutter";

const globalStyle = {
  articleContainer: {
    backgroundColor: colours.functional.gutter,
  },
  scroller: {
    backgroundColor: colours.functional.white,
  },
  keylineWrapper: {
    borderLeftWidth: 1,
    borderColor: colours.functional.keyline,
  },
  articleMainContentRow: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  },
  gutter: {
    backgroundColor: "#ffffff",
    maxWidth: "100%",
    width: maxWidth,
    overflow: "visible",
  },
};

export default globalStyle;
