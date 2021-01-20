import {
  fonts,
  spacing,
  editionBreakpoints,
  globalSpacingStyles,
} from "@times-components-native/styleguide";
import { TileConfig } from "@times-components-native/types";

const fontSizeResolver: Record<string, number> = {
  [editionBreakpoints.medium]: 20,
  [editionBreakpoints.wide]: 20,
  [editionBreakpoints.huge]: 22,
};

export default (config: TileConfig, breakpoint: string) => ({
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
    fontSize: config?.headline?.fontSize ?? fontSizeResolver[breakpoint],
    lineHeight: config?.headline?.fontSize ?? fontSizeResolver[breakpoint],
  },
  summary: {
    ...globalSpacingStyles.tabletTeaser,
  },
});
