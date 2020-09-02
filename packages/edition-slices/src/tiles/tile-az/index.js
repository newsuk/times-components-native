/* eslint-disable react/require-default-props */
import React from "react";
import { editionBreakpoints } from "@times-components-native/styleguide";
import {
  getTileImage,
  TileLink,
  TileSummary,
  TileImage,
  withTileTracking,
} from "../shared";
import stylesFactory from "./styles";

const TileAZ = ({ onPress, tile, breakpoint = editionBreakpoints.medium }) => {
  const styles = stylesFactory(breakpoint);
  const crop = getTileImage(tile, "crop169");

  if (!crop) return null;

  const {
    article: { hasVideo },
  } = tile;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
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
      <TileSummary
        headlineStyle={styles.headline}
        style={styles.summaryContainer}
        tile={tile}
        centeredStar
        underneathTextStar
      />
    </TileLink>
  );
};

export default withTileTracking(TileAZ);
