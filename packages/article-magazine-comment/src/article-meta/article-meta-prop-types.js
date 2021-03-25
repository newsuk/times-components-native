import PropTypes from "prop-types";

const metaPropTypes = {
  articleId: PropTypes.string.isRequired,
  bylines: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  publicationName: PropTypes.string.isRequired,
  publishedTime: PropTypes.string.isRequired,
  tooltips: PropTypes.array.isRequired,
};

export default metaPropTypes;
