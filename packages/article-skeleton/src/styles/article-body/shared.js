import styleguide, { tabletWidth } from "@times-components-native/styleguide";

const sharedStyles = ({
  scale,
  narrowContent,
  fontScale,
  narrowArticleBreakpoint,
}) => {
  const { colours, fontFactory, spacing } = styleguide({ scale });

  const defaultFont = {
    ...fontFactory({
      font: "body",
      fontSize: "bodyMobile",
    }),
    color: colours.functional.black,
  };
  defaultFont.fontSize *= fontScale;
  defaultFont.lineHeight *= fontScale;

  return {
    ad: {
      borderBottomColor: colours.functional.keyline,
      borderBottomWidth: 1,
      borderTopColor: colours.functional.keyline,
      borderTopWidth: 1,
      marginBottom: spacing(4),
      paddingHorizontal: spacing(2),
      paddingVertical: spacing(2),
    },
    articleLink: {
      ...defaultFont,
      color: colours.functional.action,
    },
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
    containerTablet: {
      alignSelf: "center",
      width: tabletWidth,
    },
    defaultFont,
    headingContainer: {
      marginBottom: 0,
      ...(narrowContent && { alignSelf: "flex-start" }),
    },
    imageContainerTablet: {
      alignSelf: "center",
    },
    interactiveContainer: {
      marginBottom: spacing(4),
    },
    interactiveContainerTablet: {
      alignSelf: "center",
      width: tabletWidth,
      ...(narrowContent && {
        alignSelf: "flex-start",
        maxWidth: narrowArticleBreakpoint.content,
      }),
    },
    interactiveContainerFullWidth: {
      width: "100%",
      paddingHorizontal: 0,
    },
    leadAsset: {
      marginBottom: spacing(2),
    },
    primaryContainer: {
      flexDirection: "column",
      paddingBottom: spacing(5),
      width: "100%",
    },
    heading2: {
      ...fontFactory({
        font: "headline",
        fontSize: "heading2Mobile",
      }),
      marginBottom: spacing(2),
      color: colours.functional.black,
    },
    heading3: {
      ...fontFactory({
        font: "headline",
        fontSize: "heading3Mobile",
      }),
      marginBottom: spacing(2),
      color: colours.functional.black,
    },
    heading4: {
      ...fontFactory({
        font: "headline",
        fontSize: "heading4Mobile",
      }),
      marginBottom: spacing(2),
      color: colours.functional.black,
    },
    heading5: {
      ...fontFactory({
        font: "headline",
        fontSize: "heading5Mobile",
      }),
      marginBottom: spacing(2),
      color: colours.functional.black,
    },
    heading6: {
      ...fontFactory({
        font: "headline",
        fontSize: "heading5Mobile",
      }),
      marginBottom: spacing(2),
      color: colours.functional.black,
    },
    body: defaultFont,
    bold: {
      fontWeight: "bold",
    },
    italic: { fontStyle: "italic" },
    subscriptContainer: { flexDirection: "row", alignItems: "flex-start" },
    subscript: {
      fontSize: defaultFont.fontSize * 0.5,
      lineHeight: defaultFont.fontSize * 0.5,
    },
    superscriptContainer: { flexDirection: "row", alignItems: "flex-end" },
    superscript: {
      fontSize: defaultFont.fontSize * 0.5,
      lineHeight: 30,
    },
  };
};

export default sharedStyles;
