import { Tile } from "@times-components-native/fixture-generator/src/types";

export interface ImageConfig {
  ratio: string;
}

export interface SummaryConfig {
  length: number;
}

export interface TileConfig {
  image?: ImageConfig;
  summary?: SummaryConfig;
}

export interface ConfiguredTile extends Tile {
  config: TileConfig;
}

export type OnArticlePress = (args: { id: string; isPuff?: boolean }) => void;
