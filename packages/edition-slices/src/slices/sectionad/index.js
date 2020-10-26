import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import Ad from "@times-components-native/ad";
import { ResponsiveSlice } from "../shared";

const SectionAd = ({ slice }) => {
  const { slotName } = slice;
  const adConfig = {};

  const renderAd = () => <Ad adConfig={adConfig} slotName={slotName} />;
  // const renderAd = () => (
  //   <View>
  //     <Text>Wibble</Text>
  //   </View>
  // );

  return <ResponsiveSlice renderMedium={renderAd} />;
};

SectionAd.propTypes = {
  // onPress: PropTypes.func.isRequired,
  slice: PropTypes.shape({ slotName: PropTypes.string.isRequired }).isRequired,
};

export default SectionAd;
