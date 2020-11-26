import PropTypes from "prop-types";

export const propTypes = {
  ast: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onAuthorPress: PropTypes.func,
  onTooltipPresented: PropTypes.func,
  capitalize: PropTypes.bool,
  children: PropTypes.array,
  disableTooltip: PropTypes.bool,
  attributes: PropTypes.array,
  slug: PropTypes.string,
  centered: PropTypes.bool,
  tooltipArrowOffset: PropTypes.number,
  tooltipOffsetX: PropTypes.number,
  tooltipOffsetY: PropTypes.number,
  tooltips: PropTypes.array,
};

export const defaultProps = {
  onAuthorPress: () => null,
  onTooltipPresented: () => null,
  capitalize: false,
  centered: false,
  disableTooltip: false,
  tooltipArrowOffset: 0,
  tooltipOffsetX: 0,
  tooltipOffsetY: 0,
  tooltips: [],
};
