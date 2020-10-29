import React from "react";
import PropTypes from "prop-types";

import Ad from "@times-components-native/ad";
import { useResponsiveContext } from "@times-components-native/responsive";

const SectionAd = ({ adConfig, slice }) => {
  const { slotName } = slice;
  const { orientation } = useResponsiveContext();

  const renderAd = () => <Ad adConfig={adConfig} slotName={slotName} />;

  // return <Ad adConfig={adConfig} slotName={slotName} />;

  return renderAd();
};

SectionAd.propTypes = {
  adConfig: PropTypes.shape({}),
  slice: PropTypes.shape({ slotName: PropTypes.string.isRequired }).isRequired,
};

export default SectionAd;
