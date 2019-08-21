import styleguide, { tabletWidth } from "@times-components/styleguide";

const sharedStyles = scale => {
  const { colours, fontFactory, spacing, lineHeight } = styleguide({ scale });
  return {
    ad: {
      borderBottomColor: colours.functional.keyline,
      borderBottomWidth: 1,
      borderTopColor: colours.functional.keyline,
      borderTopWidth: 1,
      marginBottom: spacing(4),
      paddingHorizontal: spacing(2),
      paddingVertical: spacing(2)
    },
    articleLink: {
      color: colours.functional.action,
      ...fontFactory({
        font: "body",
        fontSize: "bodyMobile"
      }),
      lineHeight: lineHeight({
        font: "body",
        fontSize: "bodyMobile"
      }),
      marginBottom: spacing(5),
      marginTop: 0
    },
    articleMainContentRow: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2)
    },
    articleTextElement: {
      ...fontFactory({
        font: "body",
        fontSize: "bodyMobile"
      }),
      color: colours.functional.primary,
      marginBottom: spacing(5)
    },
    containerTablet: {
      alignSelf: "center"
    },
    imageContainerTablet: {
      alignSelf: "center"
    },
    interactiveContainer: {
      marginBottom: spacing(4),
      paddingHorizontal: spacing(2)
    },
    interactiveContainerTablet: {
      alignSelf: "center",
      width: tabletWidth
    },
    interactiveContainerFullWidth: {
      width: "100%",
      paddingHorizontal: 0
    },
    leadAsset: {
      marginBottom: spacing(2)
    },
    primaryContainer: {
      flexDirection: "column",
      paddingBottom: spacing(5),
      width: "100%"
    }
  };
};

export default sharedStyles;
