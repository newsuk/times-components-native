import styleguide, {
  scales,
  tabletWidth,
} from "@times-components-native/styleguide";

const sharedStyles = (scale = scales.medium) => {
  const { colours, fontFactory, spacing } = styleguide({ scale });

  return {
    articleMainContentRow: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
    },
    articleTextElement: {
      ...fontFactory({
        font: "body",
        fontSize: "bodyMobile",
      }),
      color: colours.functional.primary,
      marginBottom: spacing(5),
    },
    articleMainContentRowTablet: {
      alignSelf: "center",
      width: tabletWidth,
    },
    articleInlineContentRowTablet: {
      width: "100%",
    },
    articleInlineSplitContentRowTablet: {
      marginBottom: 0,
    },
    narrow: {
      alignSelf: "flex-start",
      width: "100%",
    },
  };
};

export default sharedStyles;
