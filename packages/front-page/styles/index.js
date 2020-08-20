import styleguide from "@times-components-native/styleguide";

const { spacing } = styleguide();

export default () => ({
  bylineContainer: { marginBottom: spacing(1) },
  container: { flex: 1 },
  bylineStyle: { lineHeight: 13 },
});
