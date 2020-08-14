import { spacing, colours } from "@times-components-native/styleguide";

export default () => ({
  bylineContainer: { marginBottom: spacing(1) },
  bylineStyle: { lineHeight: 13 },
  withKeyline: {
    borderTopWidth: 1,
    borderColor: colours.functional.darkGrey,
    paddingTop: 5,
  },
});
