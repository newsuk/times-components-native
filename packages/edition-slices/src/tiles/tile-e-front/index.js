/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { FrontTileSummary } from "@times-components-native/front-page";
import { getTileImage, TileLink, withTileTracking, TileImage } from "../shared";
import stylesFactory from "./styles";

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
        headlineStyle={
          orientation === "landscape"
            ? styles.headlineLandscape
            : styles.headlinePortrait
        }
        summary={showSummary && article.content}
        summaryStyle={styles.summary}
        containerStyle={styles.summaryContainer}
        tile={tile}
        bylines={showByline && article.bylines}
        template={article.template}
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
