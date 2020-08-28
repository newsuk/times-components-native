import React from "react";
import { SupplementLeadOneAndFourSlice } from "@times-components-native/slice-layout";
import { TileAW, TileAX, TileD } from "../../tiles";
import { FlushResponsiveSlice } from "../shared";

function renderMedium(props, breakpoint, orientation) {
  const {
    onPress,
    slice: { lead, support1, support2, support3, support4 },
  } = props;

  const renderLeadComponent =
    orientation === "landscape" ? (
      <TileAW
        onPress={onPress}
        tile={lead}
        tileName="lead"
        breakpoint={breakpoint}
      />
    ) : (
      <TileAX
        breakpoint={breakpoint}
        onPress={onPress}
        tile={lead}
        tileName="lead"
      />
    );

  return (
    <SupplementLeadOneAndFourSlice
      breakpoint={breakpoint}
      orientation={orientation}
      lead={renderLeadComponent}
      support1={
        <TileD
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support1}
          tileName="support1"
        />
      }
      support2={
        <TileD
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support2}
          tileName="support2"
        />
      }
      support3={
        <TileD
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support3}
          tileName="support3"
        />
      }
      support4={
        <TileD
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support4}
          tileName="support4"
        />
      }
    />
  );
}

const SupplementLeadOneAndFour = (props) => {
  const renderSlice = (breakpoint, orientation) =>
    renderMedium(props, breakpoint, orientation);

  return <FlushResponsiveSlice renderMedium={renderSlice} />;
};

export default SupplementLeadOneAndFour;
