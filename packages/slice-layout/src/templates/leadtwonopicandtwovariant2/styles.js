import {
  editionBreakpoints,
  spacing,
} from "@times-components-native/styleguide";

const sharedStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
  },
};

const portraitStyles = {
  container: {
    ...sharedStyles.container,
    marginHorizontal: spacing(4),
  },

  column: {
    width: "41%",
  },
  secondColumn: {
    width: "59%",
  },
  colSeparatorStyle: {
    marginVertical: spacing(3),
  },
};

const smallTabletPortraitStyles = {
  ...portraitStyles,
  container: {
    ...portraitStyles.container,
    marginHorizontal: spacing(1),
  },
};

const landscapeStyles = {
  container: {
    ...sharedStyles.container,
    marginHorizontal: spacing(2),
  },
  column: {
    width: "34%",
  },
  secondColumn: {
    width: "41%",
  },
  thirdColumn: {
    width: "25%",
  },
  colSeparatorStyle: {
    marginVertical: spacing(2),
  },
};

const smallTabletLandscapeStyles = {
  ...landscapeStyles,
  container: {
    ...landscapeStyles.container,
    marginHorizontal: spacing(1),
  },
};

const defaultStyles = {
  portrait: portraitStyles,
  landscape: landscapeStyles,
};

const smallTabletBreakpointStyles = {
  portrait: smallTabletPortraitStyles,
  landscape: smallTabletLandscapeStyles,
};

const stylesResolver = {
  [editionBreakpoints.small]: defaultStyles,
  [editionBreakpoints.smallTablet]: smallTabletBreakpointStyles,
  [editionBreakpoints.medium]: defaultStyles,
  [editionBreakpoints.wide]: defaultStyles,
  [editionBreakpoints.huge]: defaultStyles,
};

export default (breakpoint, orientation) =>
  stylesResolver[breakpoint][orientation] || {};
