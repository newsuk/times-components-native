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
import { useResponsiveContext } from "@times-components-native/responsive";

const getAspectRatio = (crop) => (crop === "crop32" ? 3 / 2 : 5 / 4);

const TileAFront = ({ onPress, tile, orientation }) => {
  const { windowWidth, windowHeight } = useResponsiveContext();
  const isPortrait = orientation === "portrait";
  const columnCount = isPortrait ? 2 : 1;
  const crop = isPortrait ? "crop32" : "crop54";
  const imageCrop = getTileImage(tile, crop);
  const styles = getStyle(orientation, windowWidth, windowHeight);

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
        containerStyle={styles.summaryContainer}
        headlineStyle={styles.headline}
        summary={article.content}
        summaryStyle={styles.summary}
        strapline={strapline}
        straplineStyle={styles.strapline}
        tile={tile}
        justified={columnCount > 1}
        columnCount={columnCount}
        bylines={article.bylines}
        bylineMarginBottom={styles.bylineMarginBottom}
        straplineMarginTop={styles.straplineMarginTop}
        straplineMarginBottom={styles.straplineMarginBottom}
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
