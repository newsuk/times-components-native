/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { FrontTileSummary } from "@times-components-native/front-page";
import { getTileImage, TileLink, TileImage, withTileTracking } from "../shared";
import stylesFactory from "./styles";

const TileALFront = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.wide,
}) => {
  const crop = getTileImage(tile, "crop32");
  const styles = stylesFactory(breakpoint);

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
      <FrontTileSummary
        headlineStyle={styles.headline}
        summary={tile.article.content}
        summaryStyle={styles.summary}
        tile={tile}
        bylines={tile.article.bylines}
      />
    </TileLink>
  );
};

TileALFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileALFront);
