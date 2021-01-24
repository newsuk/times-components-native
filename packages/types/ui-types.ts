import { Tile } from "@times-components-native/fixture-generator/src/types";
import { editionBreakpoints } from "@times-components-native/styleguide";

export type EditionBreakpointKeys = keyof typeof editionBreakpoints;
export interface HeadlineConfig {
  fontSize: number;
}
export interface ImageAspectRatios {
  ratio: "16:9" | "3:2" | "4:5" | "2:3" | string;
}

export interface SummaryConfig {
  length: number;
}

export interface TileConfig {
  small: TileBreakpointConfig;
  medium: TileBreakpointConfig;
  wide: TileBreakpointConfig;
  huge: TileBreakpointConfig;
}

export interface TileBreakpointConfig {
  summary?: { length: number };
  image?: {
    ratio: ImageAspectRatios;
  };
  headline: { fontSize: number };
}

export interface ConfiguredTile extends Tile {
  config: TileConfig;
}

export type OnArticlePress = (args: { id: string; isPuff?: boolean }) => void;
