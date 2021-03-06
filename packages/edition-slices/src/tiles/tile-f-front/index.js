/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { FrontTileSummary } from "@times-components-native/front-page";
import {
  getTileImage,
  getTileStrapline,
  TileImage,
  TileLink,
  withTileTracking,
} from "../shared";
import { getStyle } from "./styles";
import { useResponsiveContext } from "@times-components-native/responsive";

const TileFFront = ({ onPress, tile, orientation }) => {
  const { windowWidth, windowHeight } = useResponsiveContext();
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
        hasVideo={article.hasVideo}
        hideVideoIcon
      />
      <FrontTileSummary
        containerStyle={styles.summaryContainer}
        headlineStyle={styles.headline}
        headlineMarginBottom={styles.headlineMarginBottom}
        summary={article.content}
        summaryStyle={styles.summary}
        summaryLineHeight={styles.summary.lineHeight}
        strapline={getTileStrapline(tile)}
        straplineStyle={styles.strapline}
        straplineMarginTop={styles.straplineMarginTop}
        justified={true}
        straplineMarginBottom={styles.straplineMarginBottom}
        tile={tile}
        columnCount={3}
        bylines={article.bylines}
        bylineMarginBottom={styles.bylineMarginBottom}
        hasVideo={article.hasVideo}
      />
    </TileLink>
  );
};

TileFFront.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  orientation: PropTypes.oneOf(["portrait", "landscape"]).isRequired,
};

export default withTileTracking(TileFFront);
