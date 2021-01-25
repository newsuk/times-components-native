import {
  fonts,
  spacing,
  globalSpacingStyles,
} from "@times-components-native/styleguide";
import { TileConfig } from "@times-components-native/types";

export default (config: TileConfig) => ({
  container: {
    flex: 1,
    paddingVertical: spacing(2),
    paddingHorizontal: spacing(2),
  },
  imageContainer: {
    marginBottom: spacing(2),
  },
  headline: {
    ...globalSpacingStyles.tabletHeadline,
    fontFamily: fonts.headline,
    fontSize: config?.headline?.fontSize,
    lineHeight: config?.headline?.fontSize,
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
  },
});
