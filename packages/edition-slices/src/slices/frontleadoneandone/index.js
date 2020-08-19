import React from "react";
import { ResponsiveSlice } from "@times-components-native/edition-slices/src/slices/shared";
import { FrontLeadOneAndOneSlice } from "@times-components-native/slice-layout";
import {
  TileAFront,
  TileBFront,
} from "@times-components-native/edition-slices/src/tiles";

function renderMedium(props, breakpoint, orientation) {
  const {
    onPress,
    slice: { lead, support },
  } = props;

  return (
    <FrontLeadOneAndOneSlice
      lead={
        <TileAFront
          breakpoint={breakpoint}
          onPress={onPress}
          tile={lead}
          tileName="lead"
          orientation={orientation}
        />
      }
      support={
        <TileBFront
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support}
          tileName="support"
          orientation={orientation}
          showKeyline={orientation === "portrait"}
        />
      }
      breakpoint={breakpoint}
    />
  );
}

const FrontLeadOneAndOne = (props) => {
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

export default FrontLeadOneAndOne;
