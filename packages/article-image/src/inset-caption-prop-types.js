import PropTypes from "prop-types";
import Caption, {
  propTypes as captionPropTypes,
  defaultProps as captionDefaultProps
} from "@tcn/caption";

export const propTypes = {
  ...captionPropTypes,
  CaptionComponent: PropTypes.func.isRequired
};

export const defaultProps = {
  ...captionDefaultProps,
  CaptionComponent: Caption
};
