import {
  colours,
  fontFactory,
  spacing,
} from "@times-components-native/styleguide";

const styles = {
  noSubscriptionMessage: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: colours.functional.contrast,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "80%",
    padding: spacing(2),
    textAlign: "center",
    width: 300,
    ...fontFactory({
      font: "body",
    }),
  },
  noSubscriptionWrapper: {
    height: 65,
    left: 0,
    marginTop: -32,
    position: "absolute",
    right: 0,
    top: "50%",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    zIndex: 2,
  },
  videoTabletContainer: {
    alignSelf: "center",
  },
};

export default styles;
