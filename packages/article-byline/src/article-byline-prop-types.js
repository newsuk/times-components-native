import PropTypes from "prop-types";

export const propTypes = {
  ast: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onAuthorPress: PropTypes.func,
  capitalize: PropTypes.bool,
  children: PropTypes.array,
  attributes: PropTypes.array,
  slug: PropTypes.string,
  centered: PropTypes.bool,
};

export const defaultProps = {
  onAuthorPress: () => null,
  capitalize: false,
  centered: false,
};
