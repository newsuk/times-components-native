import React from "react";
import Caption from "@tcn/caption";
import { spacing } from "@tcn/styleguide";

const captionStyle = {
  container: {
    paddingLeft: spacing(2)
  }
};

const CaptionComponentPrimaryNative = ({ caption, credits }) => (
  <Caption credits={credits} style={captionStyle} text={caption} />
);

CaptionComponentPrimaryNative.propTypes = {
  ...Caption.propTypes
};

CaptionComponentPrimaryNative.defaultProps = {
  ...Caption.defaultProps
};

export default CaptionComponentPrimaryNative;
