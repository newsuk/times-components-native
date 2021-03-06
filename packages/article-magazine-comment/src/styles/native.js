import { spacing } from "@times-components-native/styleguide";
import sharedStyles from "./shared";

const nativeStyles = {
  ...sharedStyles,
  authorImage: {
    ...sharedStyles.authorImage,
    borderRadius: 50,
    height: 100,
    overflow: "hidden",
    width: 100,
    marginBottom: spacing(2),
  },
  standFirst: {
    ...sharedStyles.standFirst,
    lineHeight: 25,
  },
};

export default nativeStyles;
