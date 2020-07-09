import PropTypes from "prop-types";
import { colours } from "@tcn/styleguide";

const articleLabelPropTypes = {
  color: PropTypes.string,
  isVideo: PropTypes.bool,
  label: PropTypes.string
};

const articleLabelDefaultProps = {
  color: colours.section.default,
  isVideo: false,
  label: null
};

export { articleLabelPropTypes, articleLabelDefaultProps };
