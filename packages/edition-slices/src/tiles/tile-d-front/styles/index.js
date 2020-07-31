import { fonts, spacing } from "@times-components-native/styleguide";

export default styles = {
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
    paddingLeft: spacing(2),
  },
  summary: {
    textAlign: "justify",
  },
};
