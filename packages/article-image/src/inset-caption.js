import React from "react";
import { useResponsiveContext } from "@times-components-native/responsive";
import { spacing } from "@times-components-native/styleguide";
import { propTypes, defaultProps } from "./inset-caption-prop-types";

const captionStyle = {
  container: {
    paddingHorizontal: spacing(2),
  },
};

const CaptionComponentPrimaryNative = ({ text, credits, CaptionComponent }) => {
  const { isTablet } = useResponsiveContext();
  return (
    <CaptionComponent
      credits={credits}
      style={isTablet ? {} : captionStyle}
      text={text}
    />
  );
};

CaptionComponentPrimaryNative.propTypes = propTypes;
CaptionComponentPrimaryNative.defaultProps = defaultProps;

export default CaptionComponentPrimaryNative;
