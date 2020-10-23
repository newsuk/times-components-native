/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

import { FrontTileSummary } from "@times-components-native/front-page";
import { getDimensions } from "@times-components-native/utils";

import { getTileImage, TileLink, withTileTracking, TileImage } from "../shared";
import { getStyle } from "./styles";

const TileGFront = ({ onPress, tile, orientation }) => {
  const { width: windowWidth, height: windowHeight } = getDimensions();
  const crop = getTileImage(tile, "crop45");
  const styles = getStyle(orientation, windowWidth, windowHeight);

  if (!crop) {
    return null;
  }

  const { article } = tile;

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <TileImage
        aspectRatio={4 / 5}
        relativeWidth={crop.relativeWidth}
        relativeHeight={crop.relativeHeight}
        relativeHorizontalOffset={crop.relativeHorizontalOffset}
        relativeVerticalOffset={crop.relativeVerticalOffset}
        style={styles.imageContainer}
        uri={crop.url}
        fill
        hasVideo={article.hasVideo}
      />
      <FrontTileSummary
        headlineStyle={styles.headline}
        summary={article.content}
        summaryStyle={styles.summary}
        tile={tile}
        bylines={article.bylines}
        template={article.template}
        bylineMarginBottom={styles.bylineMarginBottom}
        headlineMarginBottom={styles.headlineMarginBottom}
        straplineMarginTop={0}
        straplineMarginBottom={0}
        summaryLineHeight={styles.summary.lineHeight}
        containerStyle={styles.summaryContainer}
      />
    </TileLink>
  );
};

TileGFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
};

export default withTileTracking(TileGFront);
