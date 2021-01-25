import { Tile } from "@times-components-native/fixture-generator/src/types";
import { editionBreakpoints } from "@times-components-native/styleguide";

export type EditionBreakpointKeys = keyof typeof editionBreakpoints;

type ImageAspectRatios = "16:9" | "3:2" | "4:5" | "2:3";

export type Orientation = "landscape" | "portrait";

export interface TileConfig {
  summary?: { length: number };
  portrait?: { ratio: ImageAspectRatios };
  image?: {
    ratio: ImageAspectRatios;
    orientation?: Orientation;
  };
  headline?: { fontSize: number };
}

type BaseConfig = {
  [K in EditionBreakpointKeys]?: TileConfig;
};
export interface ConfiguredTile extends Tile {
  config: BaseConfig;
}

export type OnArticlePress = (args: { id: string; isPuff?: boolean }) => void;
