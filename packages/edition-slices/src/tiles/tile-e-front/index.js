/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { FrontTileSummary } from "@times-components-native/front-page";
import {
  getTileImage,
  TileLink,
  withTileTracking,
  TileImage,
  getTileSummary,
} from "../shared";
import stylesFactory from "./styles";
import WithoutWhiteSpace from "../shared/without-white-space";

const TileEFront = ({
  onPress,
  tile,
  orientation,
  showSummary,
  showByline,
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

  const summary = getTileSummary(tile, 1000);

  return (
    <TileLink onPress={onPress} style={[styles.container]} tile={tile}>
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
      <WithoutWhiteSpace
        style={styles.summaryContainer}
        render={(whiteSpaceHeight) => (
          <FrontTileSummary
            headlineStyle={
              orientation === "landscape"
                ? styles.headlineLandscape
                : styles.headlinePortrait
            }
            summary={showSummary && summary}
            summaryStyle={styles.summary}
            containerStyle={styles.summaryContainer}
            tile={tile}
            whiteSpaceHeight={whiteSpaceHeight}
            linesOfTeaserToRender={1}
            bylines={showByline && tile.article.bylines}
          />
        )}
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
