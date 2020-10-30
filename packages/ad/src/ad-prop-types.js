import { ViewPropTypes } from "react-native";
import PropTypes from "prop-types";

const { style: ViewPropTypesStyle } = ViewPropTypes;

export const propTypes = {
  baseUrl: PropTypes.string,
  contextUrl: PropTypes.string,
  isLoading: PropTypes.bool,
  section: PropTypes.string,
  slotName: PropTypes.string.isRequired,
  width: PropTypes.number,
  style: ViewPropTypesStyle,
  display: PropTypes.string,
};

export const defaultProps = {
  baseUrl: "https://www.thetimes.co.uk/",
  contextUrl: "",
  isLoading: false,
  section: "",
  style: null,
};
