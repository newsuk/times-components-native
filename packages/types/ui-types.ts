import { Tile } from "@times-components-native/fixture-generator/src/types";
import { editionBreakpoints } from "@times-components-native/styleguide";

type EditionBreakpointKeys = keyof typeof editionBreakpoints;

type ImageAspectRatios = "3:2" | "2:3" | "16:9" | "4:5";

export interface TileConfig {
  showImage?: boolean;
  summary?: { length: number };
  image?: { ratio: ImageAspectRatios; orientation: "landscape" | "portrait" };
}

type BaseConfig = {
  [K in EditionBreakpointKeys]?: TileConfig;
};
export interface ConfiguredTile extends Tile {
  config: BaseConfig;
}

export type OnArticlePress = (args: { id: string; isPuff?: boolean }) => void;
