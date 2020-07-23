import PropTypes from "prop-types";

const articleLeftColumnPropTypes = {
  authorImage: PropTypes.string.isRequired,
  bylines: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onAuthorPress: PropTypes.func.isRequired,
  onTopicPress: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

const articleLeftColumnDefaultProps = {};

export { articleLeftColumnPropTypes, articleLeftColumnDefaultProps };
