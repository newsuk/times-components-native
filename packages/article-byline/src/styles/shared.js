import styleguide, { spacing } from "@times-components-native/styleguide";

const { colours, fontFactory } = styleguide();
const shared = {
  link: {
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMeta",
    }),
    color: colours.functional.action,
    textDecorationLine: "none",
  },
  nonLinkText: {
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMeta",
    }),
    color: colours.functional.primary,
    flexDirection: "row",
  },
  opinion: {
    ...fontFactory({
      font: "headline",
      fontSize: "smallHeadline",
    }),
    color: colours.section.comment,
    fontWeight: "400",
  },
  centered: {
    textAlign: "center",
  },
  text: {
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMeta",
    }),
    color: colours.functional.secondary,
    flexDirection: "row",
  },
  unhighlighted: {
    marginTop: -7,
    paddingTop: 7,
    paddingBottom: 6,
    marginHorizontal: spacing(2),
    marginBottom: spacing(1),
  },
  highlighted: {
    borderWidth: 2,
    borderColor: colours.functional.action,
    borderRadius: 2,
    paddingTop: 5,
    paddingBottom: 4,
  },
};

export default shared;
