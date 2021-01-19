import { Tile } from "@times-components-native/fixture-generator/src/types";

export interface TileConfig {
  showImage?: boolean;
}

export interface TransformedTile extends Tile {
  config: TileConfig;
}
