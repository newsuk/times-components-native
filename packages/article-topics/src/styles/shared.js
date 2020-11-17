import styleguide from "@times-components-native/styleguide";

const { colours, fontFactory, spacing } = styleguide();
const styles = {
  container: {
    borderColor: colours.functional.keyline,
    borderRadius: 2,
    borderWidth: 1,
    padding: spacing(2),
  },
  borderHighlight: {
    borderColor: colours.functional.tooltip,
    borderWidth: 2,
    padding: spacing(2) - 1,
  },
  spacer: {
    marginRight: spacing(2),
    marginTop: spacing(2),
  },
  text: {
    color: colours.functional.secondary,
    ...fontFactory({
      font: "supporting",
      fontSize: "link",
    }),
    position: "relative",
  },
  topicGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: spacing(2),
  },
};

export default styles;
