import PropTypes from "prop-types";

export const topicPropTypes = {
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  onTooltipPresented: PropTypes.func,
  slug: PropTypes.string.isRequired,
  tooltips: PropTypes.array,
};

export const topicDefaultProps = {
  onTooltipPresented: () => null,
  tooltips: [],
};
