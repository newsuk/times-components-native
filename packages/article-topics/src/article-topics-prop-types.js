import PropTypes from "prop-types";
import { ViewPropTypes } from "react-native";

const { style: ViewPropTypesStyle } = ViewPropTypes;

export const topicsPropTypes = {
  onPress: PropTypes.func.isRequired,
  onTooltipPresented: PropTypes.func,
  style: ViewPropTypesStyle,
  tooltipDisplayedInView: PropTypes.bool,
  tooltips: PropTypes.array,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export const topicsDefaultProps = {
  tooltipDisplayedInView: false,
  onTooltipPresented: () => null,
  style: null,
  tooltips: [],
};
