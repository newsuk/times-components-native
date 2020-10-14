/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { FrontTileSummary } from "@times-components-native/front-page";
import {
  getTileImage,
  TileLink,
  withTileTracking,
  TileImage,
  getTileStrapline,
} from "../shared";
import { getStyle } from "./styles";
import { getDimensions } from "@times-components-native/utils";

const getAspectRatio = (crop) => (crop === "crop32" ? 3 / 2 : 5 / 4);

const TileAFront = ({ onPress, tile, orientation }) => {
  const { width: windowWidth } = getDimensions();
  const isPortrait = orientation === "portrait";
  const columnCount = isPortrait ? 3 : 1;
  const crop = isPortrait ? "crop32" : "crop54";
  const imageCrop = getTileImage(tile, crop);
  const styles = getStyle(orientation, windowWidth);

  if (!imageCrop) return null;

  const { article } = tile;

  let strapline = getTileStrapline(tile);
  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <TileImage
        aspectRatio={getAspectRatio(crop)}
        relativeWidth={imageCrop.relativeWidth}
        relativeHeight={imageCrop.relativeHeight}
        relativeHorizontalOffset={imageCrop.relativeHorizontalOffset}
        relativeVerticalOffset={imageCrop.relativeVerticalOffset}
        style={styles.imageContainer}
        uri={imageCrop.url}
        fill
        hasVideo={article.hasVideo}
      />
      <FrontTileSummary
        headlineStyle={styles.headline}
        summary={article.content}
        summaryStyle={styles.summary}
        strapline={strapline}
        straplineStyle={styles.strapline}
        tile={tile}
        template={article.template}
        columnCount={columnCount}
        bylines={article.bylines}
        bylineMarginBottom={styles.bylineMarginBottom}
        straplineMarginBottom={strapline ? styles.straplineMarginBottom : 0}
        headlineMarginBottom={styles.headlineMarginBottom}
        summaryLineHeight={styles.summary.lineHeight}
      />
    </TileLink>
  );
};

TileAFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileAFront);
