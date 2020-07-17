import PropTypes from "prop-types";

const articleLeftColumnPropTypes = {
  authorImage: PropTypes.string.isRequired,
  bylines: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const articleLeftColumnDefaultProps = {};

export { articleLeftColumnPropTypes, articleLeftColumnDefaultProps };
