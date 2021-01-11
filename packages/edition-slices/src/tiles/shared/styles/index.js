import { spacing } from "@times-components-native/styleguide";

const horizontalStyles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flagStyle: {
    alignItems: "flex-start",
    width: "75%",
  },
};

const verticalStyles = {
  container: {
    flexDirection: "column",
  },
  starButton: {
    alignSelf: "center",
  },
};

const starDefaultStyles = {
  marginTop: "auto",
  alignItems: "flex-end",
  paddingTop: spacing(1),
};

const starCenterStyles = {
  alignItems: "center",
};

const starUnderneathTextStyles = {
  marginTop: 0,
};

const playIconStyles = {
  justifyContent: "flex-end",
  bottom: 0,
  left: 0,
  position: "absolute",
  zIndex: 2,
  width: "100%",
  height: "100%",
};

export {
  horizontalStyles,
  verticalStyles,
  starDefaultStyles,
  starCenterStyles,
  starUnderneathTextStyles,
  playIconStyles,
};
