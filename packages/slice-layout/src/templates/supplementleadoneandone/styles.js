import { spacing, colours } from "@times-components-native/styleguide";

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: spacing(4), // TODO CHECK IF THIS IS WHAT DESIGNS HAVE
  },
  leadItem: {
    width: "75%",
  },
  keyline: {
    backgroundColor: colours.functional.keyline,
    height: 1,
  },
  supportItem: {
    width: "25%",
  },
  colSeparatorStyle: {
    marginVertical: spacing(3),
  },
};

const wideBreakpointStyles = {
  ...styles,
  container: {
    ...styles.container,
    marginHorizontal: spacing(2), // TODO CHECK IF THIS IS WHAT DESIGNS HAVE
  },
};

const stylesToreturn = {
  medium: styles,
  huge: wideBreakpointStyles,
  wide: wideBreakpointStyles,
};

export default (breakpoint) => stylesToreturn[breakpoint] || styles;
