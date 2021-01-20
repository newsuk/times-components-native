import { Tile } from "@times-components-native/fixture-generator/src/types";

export interface HeadlineConfig {
  fontSize: number;
}

export interface ImageConfig {
  ratio: "16:9" | "3:2" | "4:5" | "2:3";
}

export interface SummaryConfig {
  length: number;
}

export interface TileConfig {
  headline?: HeadlineConfig;
  image?: ImageConfig;
  summary?: SummaryConfig;
}

export interface ConfiguredTile extends Tile {
  config: TileConfig;
}

export type OnArticlePress = (args: { id: string; isPuff?: boolean }) => void;
