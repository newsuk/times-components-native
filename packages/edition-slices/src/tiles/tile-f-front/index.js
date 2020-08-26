/* eslint-disable react/require-default-props */
import React, { useState } from "react";
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
import stylesFactory from "./styles";

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
  const styles = stylesFactory(breakpoint);

  const [summaryHeight, setSummaryHeight] = useState(null);

  if (!imageCrop) return null;

  const { article } = tile;

  return (
    <TileLink
      onPress={onPress}
      style={
        isLandscape && breakpoint !== editionBreakpoints.huge
          ? styles.containerLandscape
          : styles.containerPortrait
      }
      tile={tile}
    >
      <TileImage
        aspectRatio={getAspectRatio(crop)}
        relativeWidth={imageCrop.relativeWidth}
        relativeHeight={imageCrop.relativeHeight}
        relativeHorizontalOffset={imageCrop.relativeHorizontalOffset}
        relativeVerticalOffset={imageCrop.relativeVerticalOffset}
        style={
          isLandscape && breakpoint !== editionBreakpoints.huge
            ? styles.imageContainerLandscape
            : styles.imageContainerPortrait
        }
        uri={imageCrop.url}
        fill
        hasVideo={article.hasVideo}
        onLayout={(e) => {
          if (isLandscape) {
            const height = Math.floor(e.nativeEvent.layout.height);
            setSummaryHeight(height);
          }
        }}
      />
      <FrontTileSummary
        headlineStyle={
          isLandscape ? styles.headlineLandscape : styles.headlinePortrait
        }
        summary={!hideSummary && article.content}
        summaryStyle={
          isLandscape ? styles.summaryLandscape : styles.summaryPortrait
        }
        strapline={getTileStrapline(tile)}
        straplineStyle={styles.strapline}
        containerStyle={
          isLandscape &&
          breakpoint !== editionBreakpoints.huge && {
            ...styles.summaryContainerLandscape,
            ...(summaryHeight && {
              height: summaryHeight,
            }),
          }
        }
        tile={tile}
        template={article.template}
        columnCount={columnCount}
        bylines={article.bylines}
        showKeyline={!isHugeLandscape}
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
