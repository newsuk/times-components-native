import React from "react";
import PropTypes from "prop-types";
import { SupplementSecondaryTwoAndTwoSlice } from "@times-components-native/slice-layout";
import { TileBC, TileBD, TileBE } from "../../tiles";
import { ResponsiveSlice } from "../shared";

const SupplementSecondaryTwoAndTwo = (props) => {
  const {
    onPress,
    slice: { secondary1, secondary2, support1, support2 },
  } = props;

  const renderStacked = (breakpoint) => (
    <SupplementSecondaryTwoAndTwoSlice
      breakpoint={breakpoint}
      secondary1={
        <TileBC
          breakpoint={breakpoint}
          onPress={onPress}
          tile={secondary1}
          tileName="secondary1"
        />
      }
      secondary2={
        <TileBC
          breakpoint={breakpoint}
          onPress={onPress}
          tile={secondary2}
          tileName="secondary2"
        />
      }
      support1={
        <TileBD
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support1}
          tileName="support1"
        />
      }
      support2={
        <TileBD
          breakpoint={breakpoint}
          onPress={onPress}
          tile={support2}
          tileName="support2"
        />
      }
    />
  );

  const renderHorizontal = (breakpoint) => (
    <SupplementSecondaryTwoAndTwoSlice
      breakpoint={breakpoint}
      secondary1={
        <TileBC
          breakpoint={breakpoint}
          onPress={onPress}
          tile={secondary1}
          tileName="secondary1"
        />
      }
      secondary2={
        <TileBC
          breakpoint={breakpoint}
          onPress={onPress}
          tile={secondary2}
          tileName="secondary2"
        />
      }
      support1={
        <TileBE onPress={onPress} tile={support1} tileName="support1" />
      }
      support2={
        <TileBE onPress={onPress} tile={support2} tileName="support2" />
      }
    />
  );

  return (
    <ResponsiveSlice
      renderSmall={() => null}
      renderMedium={renderStacked}
      renderWide={renderStacked}
      renderHuge={renderHorizontal}
    />
  );
};

SupplementSecondaryTwoAndTwo.propTypes = {
  onPress: PropTypes.func.isRequired,
  slice: PropTypes.shape({
    secondary1: PropTypes.shape({}).isRequired,
    secondary2: PropTypes.shape({}).isRequired,
    support1: PropTypes.shape({}).isRequired,
    support2: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default SupplementSecondaryTwoAndTwo;
