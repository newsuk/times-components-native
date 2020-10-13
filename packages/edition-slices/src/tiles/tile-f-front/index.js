/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpointWidths } from "@times-components-native/styleguide";
import { FrontTileSummary } from "@times-components-native/front-page";
import {
  getTileImage,
  getTileStrapline,
  TileImage,
  TileLink,
  withTileTracking,
} from "../shared";
import { getStyle } from "./styles";
import { getDimensions } from "@times-components-native/utils";

const TileFFront = ({ onPress, tile, orientation }) => {
  const { width: windowWidth, height: windowHeight } = getDimensions();
  const isLandscape = orientation === "landscape";
  const columnCount = isLandscape ? 1 : 3;
  const hideSummary = isLandscape;

  const isHugeLandscape = windowWidth >= editionBreakpointWidths.huge;
  const imageCrop = getTileImage(tile, "crop169");
  const styles = getStyle(orientation, windowWidth, windowHeight);

  if (!imageCrop) return null;

  const { article } = tile;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <TileImage
        aspectRatio={16 / 9}
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
        summary={!hideSummary && article.content}
        summaryStyle={styles.summary}
        strapline={getTileStrapline(tile)}
        straplineStyle={styles.strapline}
        tile={tile}
        template={article.template}
        columnCount={columnCount}
        bylines={(!isLandscape || isHugeLandscape) && article.bylines}
        bylineContainerStyle={styles.bylineContainer}
      />
    </TileLink>
  );
};

TileFFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  orientation: PropTypes.oneOf(["portrait", "landscape"]).isRequired,
  breakpoint: PropTypes.string,
};

export default withTileTracking(TileFFront);
