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
import { getDimensions } from "@times-components-native/utils";

const getAspectRatio = (crop) => (crop === "crop32" ? 3 / 2 : 16 / 9);

const TileAFront = ({
  onPress,
  tile,
  orientation,
  breakpoint = editionBreakpoints.small,
}) => {
  const { width: windowWidth } = getDimensions();
  const showStrapline = breakpoint === editionBreakpoints.huge;
  const columnCount = orientation === "portrait" ? 3 : 1;
  const crop =
    breakpoint === "huge" || orientation === "portrait" ? "crop32" : "crop169";
  const showSummary = orientation === "portrait";

  const imageCrop = getTileImage(tile, crop);
  const styles = getStyle(orientation, windowWidth);

  if (!imageCrop) return null;

  const { article } = tile;

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
        summary={showSummary && article.content}
        summaryStyle={styles.summary}
        strapline={showStrapline && getTileStrapline(tile)}
        straplineStyle={styles.strapline}
        containerStyle={styles.summaryContainer}
        tile={tile}
        template={article.template}
        columnCount={columnCount}
        bylines={article.bylines}
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
