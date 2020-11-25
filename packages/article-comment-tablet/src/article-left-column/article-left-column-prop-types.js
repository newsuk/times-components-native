import PropTypes from "prop-types";

const articleLeftColumnPropTypes = {
  authorImage: PropTypes.string.isRequired,
  bylines: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onAuthorPress: PropTypes.func.isRequired,
  onTooltipPresented: PropTypes.func.isRequired,
  onTopicPress: PropTypes.func.isRequired,
  tooltips: PropTypes.array.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default articleLeftColumnPropTypes;
