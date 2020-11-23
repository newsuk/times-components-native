import React from "react";
import PropTypes from "prop-types";

import Ad from "@times-components-native/ad";

const SectionAd = ({ adConfig, slice }) => {
  const { slotName } = slice;

  return <Ad adConfig={adConfig} slotName={slotName} />;
};

SectionAd.propTypes = {
  adConfig: PropTypes.shape({}),
  slice: PropTypes.shape({ slotName: PropTypes.string.isRequired }).isRequired,
};

export default SectionAd;
