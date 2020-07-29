/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import {
  getTileImage,
  TileLink,
  FrontTileSummary,
  withTileTracking,
  TileImage,
  getTileSummary,
} from "../shared";
import stylesFactory from "./styles";
import WithoutWhiteSpace from "../shared/without-white-space";

const TileEFront = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.small,
}) => {
  const crop = getTileImage(tile, "crop45");
  const styles = stylesFactory(breakpoint);

  if (!crop) {
    return null;
  }

  const {
    article: { hasVideo },
  } = tile;

  const summary =
    breakpoint === editionBreakpoints.small ? getTileSummary(tile, 125) : null;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <WithoutWhiteSpace
        style={styles.summaryContainer}
        render={(whiteSpaceHeight) => (
          <FrontTileSummary
            headlineStyle={styles.headline}
            summary={summary}
            style={styles.summaryContainer}
            tile={tile}
            whiteSpaceHeight={whiteSpaceHeight}
          />
        )}
      />
      <TileImage
        aspectRatio={4 / 5}
        relativeWidth={crop.relativeWidth}
        relativeHeight={crop.relativeHeight}
        relativeHorizontalOffset={crop.relativeHorizontalOffset}
        relativeVerticalOffset={crop.relativeVerticalOffset}
        style={styles.imageContainer}
        uri={crop.url}
        fill
        hasVideo={hasVideo}
      />
    </TileLink>
  );
};

TileEFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileEFront);
