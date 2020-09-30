import PropTypes from "prop-types";

export const propTypes = {
  onArticlePress: PropTypes.func.isRequired,
  initialQuery: PropTypes.string,
};

export const defaultProps = {
  initialQuery: "",
};
