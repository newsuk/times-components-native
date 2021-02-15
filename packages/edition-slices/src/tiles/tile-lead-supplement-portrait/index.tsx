/* eslint-disable react/require-default-props */
import React, { FC } from "react";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { useResponsiveContext } from "@times-components-native/responsive";
import { OnArticlePress } from "@times-components-native/types";
import { Tile } from "@times-components-native/fixture-generator/src/types";

import {
  getTileImage,
  TileLink,
  TileSummary,
  TileImage,
  withTileTracking,
} from "../shared";
import stylesFactory from "./styles";

interface Props {
  onPress: OnArticlePress;
  breakpoint: string;
  tile: Tile;
}

const TileLeadSupplementPortrait: FC<Props> = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.medium,
}) => {
  const crop = getTileImage(tile, "crop54");

  const {
    sectionContentWidth,
    sectionContentHeightTablet,
  } = useResponsiveContext();

  if (!crop) return null;

  const imageAspectRatio = 5 / 4;
  const summaryHeight =
    sectionContentHeightTablet - sectionContentWidth / imageAspectRatio;

  const styles = stylesFactory(breakpoint, summaryHeight);

  const {
    article: { hasVideo },
  } = tile;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <TileImage
        aspectRatio={imageAspectRatio}
        relativeWidth={crop.relativeWidth}
        relativeHeight={crop.relativeHeight}
        relativeHorizontalOffset={crop.relativeHorizontalOffset}
        relativeVerticalOffset={crop.relativeVerticalOffset}
        style={styles.imageContainer}
        uri={crop.url}
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

export default withTileTracking(TileLeadSupplementPortrait);
