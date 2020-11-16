import PropTypes from "prop-types";

export const topicPropTypes = {
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  tooltips: PropTypes.array,
};

export const topicDefaultProps = {
  tooltips: [],
};
