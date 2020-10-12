import {
  fontFactory,
  spacing,
  colours,
} from "@times-components-native/styleguide";

export default () => ({
  bylineContainer: { marginBottom: spacing(2) },
  bylineStyle: {
    ...fontFactory({
      font: "frontByline",
      fontSize: "cardMeta",
    }),
    lineHeight: 14,
    color: colours.functional.brandColour,
  },
  withKeyline: {
    borderTopWidth: 1,
    borderColor: colours.functional.darkGrey,
    paddingTop: spacing(1),
  },
});
