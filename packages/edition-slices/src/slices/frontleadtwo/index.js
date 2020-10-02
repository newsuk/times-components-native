import React from "react";
import { ResponsiveSlice } from "@times-components-native/edition-slices/src/slices/shared";
import { FrontLeadTwoSlice } from "@times-components-native/slice-layout";
import {
  TileGFront,
  TileHFront,
} from "@times-components-native/edition-slices/src/tiles";
import InTodaysEdition from "@times-components-native/in-todays-edition";

function renderMedium(props, breakpoint, orientation) {
  const {
    onPress,
    slice: { lead1, lead2 },
    inTodaysEditionSlice: { items: inTodaysEditionItems },
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
      inTodaysEdition={
        <InTodaysEdition
          items={inTodaysEditionItems}
          onArticlePress={onPress}
          onLinkPress={onPress}
          orientation={orientation}
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
