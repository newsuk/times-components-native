import {
  fonts,
  spacing,
  globalSpacingStyles,
} from "@times-components-native/styleguide";
import { TileBreakpointConfig } from "@times-components-native/types";

export default (config: TileBreakpointConfig) => ({
  container: {
    flex: 1,
    paddingVertical: spacing(3),
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
