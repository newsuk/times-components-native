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

interface Props {
  onPress: OnArticlePress;
  tile: ConfiguredTile;
  breakpoint: string;
}

const TileVerticalA: FC<Props> = ({ onPress, tile, breakpoint }) => {
  const styles = styleFactory(breakpoint);
  const crop = getTileImage(tile, "crop32");

  const {
    article: { hasVideo },
  } = tile;

  console.log(tile.config?.summary?.length);

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      {crop && tile.config?.image && (
        <TileImage
          aspectRatio={3 / 2}
          relativeWidth={crop.relativeWidth}
          relativeHeight={crop.relativeHeight}
          relativeHorizontalOffset={crop.relativeHorizontalOffset}
          relativeVerticalOffset={crop.relativeVerticalOffset}
          style={styles.imageContainer}
          uri={crop.url}
          fill
          hasVideo={hasVideo}
        />
      )}
      <WithoutWhiteSpace
        render={(whiteSpaceHeight: number) => (
          <TileSummary
            headlineStyle={styles.headline}
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

export default withTileTracking(TileVerticalA);
