import React from "react";
import { ResponsiveSlice } from "@times-components-native/edition-slices/src/slices/shared";
import { FrontLeadTwoSlice } from "@times-components-native/slice-layout";
import {
  TileGFront,
  TileHFront,
} from "@times-components-native/edition-slices/src/tiles";

function renderMedium(props, breakpoint, orientation) {
  const {
    onPress,
    slice: { lead1, lead2 },
  } = props;

  return (
    <FrontLeadTwoSlice
      lead1={
        <TileHFront
          onPress={onPress}
          tile={lead1}
          tileName="lead1"
          orientation={orientation}
        />
      }
      lead2={
        <TileGFront
          onPress={onPress}
          tile={lead2}
          tileName="lead2"
          orientation={orientation}
          // showSummary={
          //   orientation === "landscape" &&
          //   breakpoint === editionBreakpoints.huge
          // }
          showSummary={true}
          showByline={true}
        />
      }
      breakpoint={breakpoint}
      orientation={orientation}
    />
  );
}

const FrontLeadTwo = (props) => {
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

export default FrontLeadTwo;
