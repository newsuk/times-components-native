/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

import { FrontTileSummary } from "@times-components-native/front-page";
import { useResponsiveContext } from "@times-components-native/responsive";
import { Orientation } from "@times-components-native/responsive/src/context";

import { getTileImage, TileImage, TileLink, withTileTracking } from "../shared";
import { getStyle } from "./styles";
import { spacing } from "@times-components-native/styleguide";

const TileGFront = ({ onPress, tile, orientation }) => {
  const { windowWidth, windowHeight, isTablet } = useResponsiveContext();
  const crop = getTileImage(tile, "crop45");
  const styles = getStyle(orientation, windowWidth, windowHeight);

  if (!crop) {
    return null;
  }

  const { article } = tile;

  const videoIconExtraSpacing =
    article.hasVideo && isTablet && orientation === Orientation.PORTRAIT
      ? spacing(2)
      : 0;

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
        hasVideo={article.hasVideo}
        videoIconExtraSpacing={videoIconExtraSpacing}
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
