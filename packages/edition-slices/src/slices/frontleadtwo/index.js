import React from "react";
import { ResponsiveSlice } from "@times-components-native/edition-slices/src/slices/shared";
import { FrontLeadTwoSlice } from "@times-components-native/slice-layout";
import {
  TileGFront,
  TileHFront,
} from "@times-components-native/edition-slices/src/tiles";
import InTodaysEdition from "@times-components-native/in-todays-edition";

function renderMedium(props, orientation) {
  const {
    onPress,
    onLinkPress,
    slice: { lead1, lead2 },
    inTodaysEditionSlice,
  } = props;

  if (!inTodaysEditionSlice?.items.length) return null;

  const { items: inTodaysEditionItems } = inTodaysEditionSlice;

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
        />
      }
      inTodaysEdition={
        <InTodaysEdition
          items={inTodaysEditionItems}
          onArticlePress={onPress}
          onLinkPress={onLinkPress}
          orientation={orientation}
        />
      }
      orientation={orientation}
    />
  );
}

const FrontLeadTwo = (props) => {
  const renderSlice = (_breakpoint, orientation) =>
    renderMedium(props, orientation);

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
