import {
  fonts,
  spacing,
  globalSpacingStyles,
} from "@times-components-native/styleguide";
import { TileConfig } from "@times-components-native/types";

export default (config: TileConfig) => {
  const styles = {
    container: {
      flex: 1,
      padding: spacing(2),
    },
    headline: {
      ...globalSpacingStyles.tabletHeadline,
      fontFamily: fonts.headline,
      fontSize: config.headline?.fontSize,
      lineHeight: config.headline?.fontSize,
    },
    imageContainer: {
      width: "100%",
      marginBottom: spacing(2),
    },
    summary: {
      ...globalSpacingStyles.tabletTeaser,
    },
  };

  return styles;
};
