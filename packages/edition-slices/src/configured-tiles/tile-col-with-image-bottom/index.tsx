import React, { FC } from "react";
import {
  Tile,
  Crop,
} from "@times-components-native/fixture-generator/src/types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import {
  getTileImage,
  getTileSummary,
  TileImage,
  TileLink,
  TileSummary,
  withTileTracking,
} from "../../tiles/shared";
import stylesFactory from "./styles";
import WithoutWhiteSpace from "../../tiles/shared/without-white-space";
import getAspectRatio from "../../utils/getAspectRatio";
import getCropByRatio from "../../utils/getCropByRatio";
import {
  ConfiguredTile,
  OnArticlePress,
  Orientation,
  EditionBreakpointKeys,
  TileConfig,
} from "@times-components-native/types";

interface Props {
  onPress(): OnArticlePress;
  tile: ConfiguredTile;
  breakpoint: EditionBreakpointKeys;
  orientation: Orientation;
}

const TileColWithImageBottom: FC<Props> = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.medium,
  orientation,
}) => {
  if (!tile.config) return null;

  const config = tile.config[breakpoint];

  const styles = stylesFactory(breakpoint, config);

  const renderTileImage = (
    { article }: Tile,
    imageProps: Pick<TileConfig, "image" | "portrait">,
  ) => {
    const imageRatio =
      imageProps.portrait && orientation === "portrait"
        ? imageProps.portrait.ratio
        : imageProps.image?.ratio;

    if (!imageRatio) return null;

    const crop: Crop = getTileImage(tile, getCropByRatio(imageRatio));

    if (!crop) return null;

    const {
      relativeWidth,
      relativeHeight,
      relativeHorizontalOffset,
      relativeVerticalOffset,
      url,
    } = crop;

    return (
      <TileImage
        aspectRatio={getAspectRatio(imageRatio)}
        relativeWidth={relativeWidth}
        relativeHeight={relativeHeight}
        relativeHorizontalOffset={relativeHorizontalOffset}
        relativeVerticalOffset={relativeVerticalOffset}
        style={styles.imageContainer}
        uri={url}
        hasVideo={article?.hasVideo}
      />
    );
  };

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <WithoutWhiteSpace
        style={styles.summaryContainer}
        render={(whiteSpaceHeight: number) => (
          <TileSummary
            headlineStyle={styles.headline}
            tile={tile}
            whiteSpaceHeight={whiteSpaceHeight}
            {...(config?.summary && {
              summary: getTileSummary(tile, config?.summary.length),
              summaryStyle: styles.summary,
            })}
          />
        )}
      />
      {config?.image &&
        (config.image?.orientation === orientation || config?.portrait) &&
        renderTileImage(tile, config)}
    </TileLink>
  );
};

export default withTileTracking(TileColWithImageBottom);
