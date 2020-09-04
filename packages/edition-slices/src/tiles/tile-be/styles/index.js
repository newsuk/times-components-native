import { fonts, spacing } from "@times-components-native/styleguide";

const styles = {
  container: {
    flex: 1,
    padding: spacing(2),
  },
  headline: {
    fontFamily: fonts.headlineRegular,
    fontWeight: "normal",
    fontSize: 25,
    lineHeight: 25,
  },
  imageContainer: {
    overflow: "hidden",
    width: 146,
  },
  summaryContainer: {
    flex: 1,
    paddingTop: spacing(3),
  },
};

export default styles;
