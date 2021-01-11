import PropTypes from "prop-types";
import { defaultProps, propTypes } from "../image-prop-types";

export const modalPropTypes = {
  ...propTypes,
  caption: PropTypes.shape({
    text: PropTypes.string,
    credits: PropTypes.string,
  }),
  onImagePress: PropTypes.func,
  show: PropTypes.bool,
  isSmallImage: PropTypes.bool,
};

export const modalDefaultProps = {
  ...defaultProps,
  caption: null,
  onImagePress: null,
  show: false,
  isSmallImage: false,
};
