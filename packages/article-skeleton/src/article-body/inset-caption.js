import React from "react";
import Caption from "@times-components-native/caption";

const CaptionComponentPrimaryNative = ({ caption, credits, style }) => (
  <Caption credits={credits} style={style} text={caption} />
);

CaptionComponentPrimaryNative.propTypes = {
  ...Caption.propTypes,
};

CaptionComponentPrimaryNative.defaultProps = {
  ...Caption.defaultProps,
};

export default CaptionComponentPrimaryNative;
