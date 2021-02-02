/* eslint-disable react/require-default-props */
import React, { FC } from "react";
import {
  colours,
  editionBreakpoints,
} from "@times-components-native/styleguide";
import {
  getTileImage,
  TileLink,
  TileSummary,
  TileImage,
  withTileTracking,
} from "../shared";
import stylesFactory from "./styles";
import { View } from "react-native";
import WithoutWhiteSpace from "@times-components-native/edition-slices/src/tiles/shared/without-white-space";
import { useResponsiveContext } from "@times-components-native/responsive";
import { OnArticlePress } from "@times-components-native/types";
import { Tile } from "@times-components-native/fixture-generator/src/types";
import { getTileSummary } from "@times-components-native/edition-slices/src/tiles/shared";

interface Props {
  onPress: OnArticlePress;
  breakpoint: string;
  tile: Tile;
}
const TileLeadSupplementLandscape: FC<Props> = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.medium,
}) => {
  const height = useResponsiveContext().sectionContentHeight;
  const styles = stylesFactory(breakpoint)!;
  const crop = getTileImage(tile, "crop54");

  if (!crop) return null;

  const {
    article: { hasVideo },
  } = tile;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <View style={{ height }}>
        <TileImage
          aspectRatio={5 / 4}
          relativeWidth={crop.relativeWidth}
          relativeHeight={crop.relativeHeight}
          relativeHorizontalOffset={crop.relativeHorizontalOffset}
          relativeVerticalOffset={crop.relativeVerticalOffset}
          style={{ height }}
          uri={crop.url}
          hasVideo={hasVideo}
        />
      </View>
      <WithoutWhiteSpace
        render={(whiteSpaceHeight: number) => (
          <TileSummary
            whiteSpaceHeight={whiteSpaceHeight}
            headlineStyle={styles.headline}
            labelColour={colours.functional.brandColour}
            style={styles.summaryContainer}
            summary={getTileSummary(tile, 1000)}
            summaryStyle={styles.teaserText}
            tile={tile}
            centeredStar
            underneathTextStar
          />
        )}
      />
    </TileLink>
  );
};

export default withTileTracking(TileLeadSupplementLandscape);
