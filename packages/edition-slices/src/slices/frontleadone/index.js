import React from "react";
import { ResponsiveSlice } from "@times-components-native/edition-slices/src/slices/shared";
import { FrontLeadOneSlice } from "@times-components-native/slice-layout";
import { TileFFront } from "@times-components-native/edition-slices/src/tiles";

function renderMedium(props, breakpoint, orientation) {
  const {
    onPress,
    slice: { lead },
  } = props;

  return (
    <FrontLeadOneSlice
      lead={
        <TileFFront
          breakpoint={breakpoint}
          onPress={onPress}
          tile={lead}
          tileName="lead"
          orientation={orientation}
        />
      }
      breakpoint={breakpoint}
    />
  );
}

const FrontLeadOne = (props) => {
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

export default FrontLeadOne;
