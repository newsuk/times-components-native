import React from "react";
import { ResponsiveSlice } from "@times-components-native/edition-slices/src/slices/shared";
import { FrontLeadTwoAndTwoSlice } from "@times-components-native/slice-layout";
import {
  TileDFront,
  TileEFront,
  TileXFront,
  TileYFront,
  TileALFront,
} from "@times-components-native/edition-slices/src/tiles";

function renderMedium(props, breakpoint, orientation) {
  const {
    onPress,
    slice: { lead1, lead2, support1, support2 },
  } = props;

  const renderSupport1Component =
    orientation === "landscape" ? (
      <TileALFront
        breakpoint={breakpoint}
        onPress={onPress}
        tile={support1}
        tileName="support1"
      />
    ) : (
      <TileDFront
        breakpoint={breakpoint}
        onPress={onPress}
        tile={support1}
        tileName="support1"
      />
    );

  return (
    <FrontLeadTwoAndTwoSlice
      lead1={
        <TileXFront
          breakpoint={breakpoint}
          onPress={onPress}
          tile={lead1}
          tileName="lead1"
          orientation={orientation}
        />
      }
      lead2={
        <TileYFront
          breakpoint={breakpoint}
          onPress={onPress}
          tile={lead2}
          tileName="lead2"
          orientation={orientation}
        />
      }
      support1={renderSupport1Component}
      support2={
        <TileEFront
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support2}
          tileName="support2"
          orientation={orientation}
          showSummary={orientation === "portrait"}
          showByline={orientation === "portrait"}
        />
      }
      breakpoint={breakpoint}
      orientation={orientation}
    />
  );
}

const FrontLeadTwoAndTwo = (props) => {
  const renderSlice = (breakpoint, orientation) =>
    renderMedium(props, breakpoint, orientation);

  return (
    <ResponsiveSlice
      renderSmall={renderSlice}
      renderMedium={renderSlice}
      renderWide={renderSlice}
      renderHuge={renderSlice}
      grow
    />
  );
};

export default FrontLeadTwoAndTwo;
