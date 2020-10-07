import styleguide from "@times-components-native/styleguide";
import articleSummaryStyles from "@times-components-native/article-summary/src/styles";
const { colours, fonts, spacing } = styleguide();
export default {
  summary: {
    ...articleSummaryStyles.text,
    color: colours.functional.primary,
    fontFamily: fonts.body,
  },
  bylineContainer: { marginBottom: spacing(1) },
  container: { flex: 1 },
};
