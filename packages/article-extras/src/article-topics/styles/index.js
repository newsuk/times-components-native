import { spacing } from "@tcn/styleguide";
import sharedStyles from "./shared";

const topicStyles = {
  ...sharedStyles,
  topicsContainer: {
    ...sharedStyles.topicsContainer,
    marginLeft: spacing(2),
    marginRight: spacing(2)
  }
};

export default topicStyles;
