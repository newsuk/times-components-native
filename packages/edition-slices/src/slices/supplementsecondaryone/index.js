import React from "react";
import PropTypes from "prop-types";
import { TileBF } from "../../tiles";
import { ResponsiveSlice } from "../shared";

const SupplementSecondaryOneSlice = (props) => {
  const {
    onPress,
    slice: { secondary },
  } = props;

  const renderSlice = (breakpoint) => (
    <TileBF
      onPress={onPress}
      tile={secondary}
      tileName="secondary"
      breakpoint={breakpoint}
    />
  );

  return (
    <ResponsiveSlice
      renderSmall={renderSlice}
      renderMedium={renderSlice}
      renderWide={renderSlice}
      renderHuge={renderSlice}
    />
  );
};

SupplementSecondaryOneSlice.propTypes = {
  onPress: PropTypes.func.isRequired,
  slice: PropTypes.shape({ secondary: PropTypes.shape({}).isRequired })
    .isRequired,
};

export default SupplementSecondaryOneSlice;
