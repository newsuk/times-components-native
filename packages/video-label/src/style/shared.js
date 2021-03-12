import styleguideFactory, {
  spacing,
} from "@times-components-native/styleguide";

const { fontFactory } = styleguideFactory();

const styles = {
  container: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: -1,
  },
  iconContainer: {
    paddingBottom: spacing(1),
  },
  title: {
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMetaMobile",
    }),
    flex: -1,
    fontWeight: "400",
    letterSpacing: 1,
    lineHeight: 11,
    marginLeft: spacing(1),
    paddingTop: 1,
  },
};

export default styles;
