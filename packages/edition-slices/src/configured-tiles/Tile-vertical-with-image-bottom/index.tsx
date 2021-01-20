import React, { FC } from "react";
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
import merge from "lodash.merge";
import getAspectRatio from "../../utils/getAspectRatio";
import getCropByRatio from "../../utils/getCropByRatio";

interface Props {
  onPress(): void;
  tile: any;
  breakpoint: number;
  config: any;
}

// portrait 125 summary
// landscape 800 summary show image

const TileVerticalWithImageBottom: FC<Props> = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.small,
  orientation,
}) => {
  const config = merge(tile.config, tile.config[breakpoint]);

  const styles = stylesFactory(breakpoint);
  console.log("🚀 ~ file: index.tsx ~ line 35 ~ styles", orientation);

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
        fill
        hasVideo={hasVideo}
      />
    ) as any;
  };

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      {config?.image &&
        config.image?.orientation === orientation &&
        renderTileImage(tile, config.image)}
      <WithoutWhiteSpace
        style={styles.summaryContainer}
        render={(whiteSpaceHeight: any) => (
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
    </TileLink>
  );
};

export default withTileTracking(TileVerticalWithImageBottom);
