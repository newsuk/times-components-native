import PropTypes from "prop-types";
import { colours } from "@times-components-native/styleguide";

const articleLabelPropTypes = {
  color: PropTypes.string,
  isVideo: PropTypes.bool,
  isTablet: PropTypes.bool,
  label: PropTypes.string,
};

const articleLabelDefaultProps = {
  color: colours.section.default,
  isVideo: false,
  isTablet: false,
  label: null,
};

export { articleLabelPropTypes, articleLabelDefaultProps };
