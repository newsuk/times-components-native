import PropTypes from "prop-types";

const metaPropTypes = {
  bylines: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onTooltipPresented: PropTypes.func.isRequired,
  publicationName: PropTypes.string.isRequired,
  publishedTime: PropTypes.string.isRequired,
  tooltips: PropTypes.array.isRequired,
};

export default metaPropTypes;
