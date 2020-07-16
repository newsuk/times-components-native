import styleguide, {
  scales,
  fonts,
  narrowArticleContentWidth,
  tabletWidth,
} from "@times-components-native/styleguide";
import { fontSize, margins } from "./drop-cap-sizes";

const sharedStyles = (dropCapFont = "dropCap", scale = scales.medium) => {
  const { colours, fontFactory, spacing } = styleguide({ scale });
  const dropCapMargins = margins(dropCapFont, scale);
  const dropCapFontSize = fontSize(dropCapFont, scale);

  return {
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
    articleMainContentRowTablet: {
      alignSelf: "center",
      width: tabletWidth,
    },
    narrow: {
      borderWidth: 1,
      borderColor: "red",
      width: "100%",
      alignSelf: "flex-start", 
      maxWidth: narrowArticleContentWidth,
    },
    dropCapContainer: {
      flexDirection: "row",
      flexWrap: "wrap"
    },
    dropCapContainerTablet: {
      width: tabletWidth,
    },
    dropCapTextElement: {
      color: colours.functional.primary,
      fontFamily: fonts[dropCapFont],
      fontSize: dropCapFontSize,
      marginBottom: dropCapMargins.bottom,
      marginRight: spacing(1),
      marginTop: dropCapMargins.top
    }
  };
};

export default sharedStyles;
