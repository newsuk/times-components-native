/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import WithoutWhiteSpace from "../shared/without-white-space";
import {
  getTileImage,
  TileLink,
  TileSummary,
  withTileTracking,
  getTileSummary,
  TileImage,
} from "../shared";
import stylesFactory from "./styles";

const TileD = ({ onPress, tile, breakpoint = editionBreakpoints.small }) => {
  const crop = getTileImage(tile, "crop32");
  const styles = stylesFactory(breakpoint);

  if (!crop) {
    return null;
  }

  const {
    article: { hasVideo },
  } = tile;
  console.log("title D", tile.article.shortHeadline);

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
        hasVideo={hasVideo}
      />
      <WithoutWhiteSpace
        render={(whiteSpaceHeight) => (
          <TileSummary
            headlineStyle={styles.headline}
            style={styles.summaryContainer}
            summary={getTileSummary(tile, 125)}
            summaryStyle={styles.summary}
            tile={tile}
            whiteSpaceHeight={whiteSpaceHeight}
            withStar={false}
          />
        )}
      />
    </TileLink>
  );
};

TileD.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileD);
