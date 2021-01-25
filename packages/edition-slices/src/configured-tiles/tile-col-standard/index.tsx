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
import {
  ConfiguredTile,
  OnArticlePress,
  EditionBreakpointKeys,
} from "@times-components-native/types";
import {
  getAspectRatio,
  getCropByRatio,
} from "@times-components-native/image/src/utils";

interface Props {
  onPress: OnArticlePress;
  tile: ConfiguredTile;
  breakpoint: EditionBreakpointKeys;
}

const TileColStandard: FC<Props> = ({ onPress, tile, breakpoint }) => {
  if (!tile.config) return null;

  const config = tile.config[breakpoint];

  const styles = styleFactory(config, breakpoint);

  const renderTileImage = ({ article: { hasVideo } }: any, imageProps: any) => {
    const crop = getTileImage(tile, getCropByRatio(imageProps?.ratio));

    if (!crop) {
      return null;
    }

    const {
      relativeWidth,
      relativeHeight,
      relativeHorizontalOffset,
      relativeVerticalOffset,
      url,
    } = crop;

    return (
      <TileImage
        aspectRatio={getAspectRatio(imageProps?.ratio)}
        relativeWidth={relativeWidth}
        relativeHeight={relativeHeight}
        relativeHorizontalOffset={relativeHorizontalOffset}
        relativeVerticalOffset={relativeVerticalOffset}
        style={styles.imageContainer}
        uri={url}
        hasVideo={hasVideo}
      />
    ) as any;
  };

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      {config.image && renderTileImage(tile, config.image)}
      <WithoutWhiteSpace
        render={(whiteSpaceHeight: number) => (
          <TileSummary
            headlineStyle={styles.headline}
            {...(config?.summary && {
              summary: getTileSummary(tile, config?.summary.length),
              summaryStyle: styles.summary,
            })}
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
