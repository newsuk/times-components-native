import React from "react";
import { ResponsiveSlice } from "@times-components-native/edition-slices/src/slices/shared";
import { FrontLeadOneAndOneSlice } from "@times-components-native/slice-layout";
import {
  TileAFront,
  TileBFront,
} from "@times-components-native/edition-slices/src/tiles";
import InTodaysEdition from "@times-components-native/in-todays-edition";
import InTodaysEditionData from "@times-components-native/in-todays-edition/fixtures/in-todays-edition.json";

function renderMedium(props, breakpoint, orientation) {
  const {
    onPress,
    onLinkPress,
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
      inTodaysEdition={
        <InTodaysEdition
          items={InTodaysEditionData}
          onArticlePress={onPress}
          onLinkPress={onLinkPress}
          orientation={orientation}
        />
      }
      breakpoint={breakpoint}
      orientation={orientation}
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
