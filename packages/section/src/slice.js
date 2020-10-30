import React from "react";
import PropTypes from "prop-types";
import { getSlice } from "@times-components-native/edition-slices";
import withSliceTrackingContext from "./slice-tracking-context";

const Slice = ({
  slice,
  onPress,
  onLinkPress,
  isInSupplement,
  inTodaysEditionSlice,
  adConfig,
}) => {
  const Component = getSlice(isInSupplement, slice.name);
  return Component ? (
    <Component
      onPress={onPress}
      onLinkPress={onLinkPress}
      slice={slice}
      inTodaysEditionSlice={inTodaysEditionSlice}
      adConfig={adConfig}
    />
  ) : null;
};

Slice.propTypes = {
  onPress: PropTypes.func.isRequired,
  slice: PropTypes.shape({}).isRequired,
};

export default withSliceTrackingContext(Slice);
