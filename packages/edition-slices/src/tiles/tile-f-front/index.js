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
  getTileStrapline,
} from "../shared";
import { getStyle } from "./styles";
import { Dimensions } from "react-native";

const getAspectRatio = (crop) => (crop === "crop32" ? 3 / 2 : 16 / 9);

const TileFFront = ({
  onPress,
  tile,
  orientation,
  breakpoint = editionBreakpoints.small,
}) => {
  const isLandscape = orientation === "landscape";
  const isHugeLandscape = breakpoint === editionBreakpoints.huge && isLandscape;
  const columnCount = isLandscape ? 1 : 3;
  const crop = isHugeLandscape || !isLandscape ? "crop169" : "crop32";
  const hideSummary = isHugeLandscape;

  const imageCrop = getTileImage(tile, crop);
  const { width: windowWidth } = Dimensions.get("window");
  const newStyles = getStyle(orientation, windowWidth);

  if (!imageCrop) return null;

  const { article } = tile;

  return (
    <TileLink onPress={onPress} style={newStyles.container} tile={tile}>
      <TileImage
        aspectRatio={getAspectRatio(crop)}
        relativeWidth={imageCrop.relativeWidth}
        relativeHeight={imageCrop.relativeHeight}
        relativeHorizontalOffset={imageCrop.relativeHorizontalOffset}
        relativeVerticalOffset={imageCrop.relativeVerticalOffset}
        style={newStyles.imageContainer}
        uri={imageCrop.url}
        fill
        hasVideo={article.hasVideo}
      />
      <FrontTileSummary
        headlineStyle={newStyles.headline}
        summary={!hideSummary && article.content}
        summaryStyle={newStyles.summary}
        strapline={getTileStrapline(tile)}
        straplineStyle={newStyles.strapline}
        tile={tile}
        template={article.template}
        columnCount={columnCount}
        bylines={article.bylines}
        showKeyline={!isHugeLandscape}
        bylineContainerStyle={newStyles.bylineContainer}
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
