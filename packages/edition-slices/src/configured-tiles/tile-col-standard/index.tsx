import React, { FC } from "react";
import {
  getTileImage,
  getTileSummary,
  TileImage,
  TileLink,
  TileSummary,
  withTileTracking,
} from "../../tiles/shared";

import styleFactory from "./styles";
import WithoutWhiteSpace from "../../tiles/shared/without-white-space";
import PositionedTileStar from "../../tiles/shared/positioned-tile-star";
import { ConfiguredTile, OnArticlePress } from "@times-components-native/types";
import { getCropByRatio } from "../../utils/getCropByRatio";
import { getAspectRatio } from "../../utils/getAspectRatio";

interface Props {
  onPress: OnArticlePress;
  tile: ConfiguredTile;
  breakpoint: string;
}

const TileColStandard: FC<Props> = ({ onPress, tile, breakpoint }) => {
  const styles = styleFactory(breakpoint);

  const {
    article: { hasVideo },
  } = tile;

  const crop =
    tile.config?.image &&
    getTileImage(tile, getCropByRatio(tile.config?.image?.ratio));
  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      {crop && tile.config?.image && (
        <TileImage
          aspectRatio={getAspectRatio(tile.config?.image?.ratio)}
          relativeWidth={crop.relativeWidth}
          relativeHeight={crop.relativeHeight}
          relativeHorizontalOffset={crop.relativeHorizontalOffset}
          relativeVerticalOffset={crop.relativeVerticalOffset}
          style={styles.imageContainer}
          uri={crop.url}
          hasVideo={hasVideo}
        />
      )}
      <WithoutWhiteSpace
        render={(whiteSpaceHeight: number) => (
          <TileSummary
            headlineStyle={[
              styles.headline,
              {
                fontSize: tile.config?.headline?.fontSize,
                lineHeight: tile.config?.headline?.fontSize,
              },
            ]}
            summary={
              tile.config?.summary
                ? getTileSummary(tile, tile.config?.summary?.length)
                : {}
            }
            summaryStyle={styles.summary}
            tile={tile}
            whiteSpaceHeight={whiteSpaceHeight}
            withStar={false}
          />
        )}
      />
      <PositionedTileStar articleId={tile.article.id} />
    </TileLink>
  );
};

export default withTileTracking(TileColStandard);
