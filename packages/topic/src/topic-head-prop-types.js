import PropTypes from "prop-types";
import { propTypes as treePropType } from "@tcn/markup-forest";

export const propTypes = {
  description: PropTypes.arrayOf(treePropType),
  isLoading: PropTypes.bool,
  name: PropTypes.string
};

export const defaultProps = {
  description: [],
  isLoading: true,
  name: ""
};
