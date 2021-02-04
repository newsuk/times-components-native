import { fonts, spacing } from "@times-components-native/styleguide";

const styles = {
  container: {
    flexDirection: "row",
    padding: spacing(2),
    paddingBottom: spacing(3),
  },
  headline: {
    fontFamily: fonts.headline,
    fontSize: 20,
    lineHeight: 20,
  },
  imageContainer: {
    flex: 1,
  },
  summaryContainer: {
    flex: 1,
    paddingLeft: spacing(2),
    width: "100%",
  },
};

export default styles;
