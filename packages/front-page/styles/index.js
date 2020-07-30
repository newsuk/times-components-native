import styleguide from "@times-components-native/styleguide";

const { colours, fontFactory, fonts, spacing } = styleguide();

const styles = {
  text: {
    color: colours.functional.primary,
    marginBottom: spacing(2),
    ...fontFactory({
      font: "body",
      fontSize: "front-teaser",
    }),
  },
  bylineContainer: { marginBottom: 5 },
};

export default styles;
