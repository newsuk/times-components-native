import { spacing, fontFactory } from "@times-components-native/styleguide";

const shared = {
  bullet: {
    borderRadius: 2.5,
    height: 5,
    width: 5,
    marginBottom: 3,
  },
  flagPadding: {
    marginRight: spacing(3),
  },
  flagsContainer: {
    marginBottom: spacing(3),
    marginTop: spacing(1),
  },
  flags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: spacing(2),
  },
  title: {
    ...fontFactory({
      font: "body",
      fontSize: "cardMetaMobile",
    }),
    fontWeight: "bold",
    lineHeight: 10,
    textTransform: "uppercase",
    fontSize: 10,
    letterSpacing: 0,
    includeFontPadding: false,
    paddingBottom: spacing(0),
    marginLeft: spacing(1),
    marginBottom: spacing(0),
  },
  view: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 0,
  },
};

export default shared;
