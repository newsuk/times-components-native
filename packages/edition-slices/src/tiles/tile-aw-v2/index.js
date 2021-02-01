/* eslint-disable react/require-default-props */
import React from "react";
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
  getTileSummary,
} from "../shared";
import stylesFactory from "./styles";
import { View } from "react-native";
import WithoutWhiteSpace from "@times-components-native/edition-slices/src/tiles/shared/without-white-space";

const TileAWV2 = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.medium,
}) => {
  const styles = stylesFactory(breakpoint);
  const crop = getTileImage(tile, "crop54");

  if (!crop) return null;

  const {
    article: { hasVideo },
  } = tile;
  const height = 590;

  console.log(tile.article.content);

  return (
    <TileLink
      onPress={onPress}
      style={[styles.container, { backgroundColor: colours.functional.border }]}
      tile={tile}
    >
      <View style={{ height: height }}>
        <TileImage
          aspectRatio={5 / 4}
          relativeWidth={crop.relativeWidth}
          relativeHeight={crop.relativeHeight}
          relativeHorizontalOffset={crop.relativeHorizontalOffset}
          relativeVerticalOffset={crop.relativeVerticalOffset}
          style={[styles.imageContainer, { height }]}
          uri={crop.url}
          hasVideo={hasVideo}
        />
      </View>
      <WithoutWhiteSpace
        render={(whiteSpaceHeight) => (
          <TileSummary
            whiteSpaceHeight={whiteSpaceHeight}
            headlineStyle={styles.headline}
            style={[styles.summaryContainer]}
            summary={tile.article.content}
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

export default withTileTracking(TileAWV2);
