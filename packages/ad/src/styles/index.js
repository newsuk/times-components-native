import styleguide from "@times-components-native/styleguide";
import { StyleSheet } from "react-native";

const { colours, fontFactory, spacing, fonts } = styleguide();

export const calculateViewBox = ({ height, width }) => {
  if (height >= 90 && width >= 728) {
    return {
      marginLeft: 630,
      marginTop: -120,
      svgHeight: 50,
      svgWidth: 1200,
    };
  }

  if (height >= 250 && width >= 300) {
    return {
      marginLeft: 15,
      marginTop: 0,
      svgHeight: 250,
      svgWidth: 269,
    };
  }

  return {
    marginLeft: 50,
    marginTop: 0,
    svgHeight: height,
    svgWidth: width,
  };
};

export const calculateViewportVisible = (height) => {
  const middle = height / 2;
  const middleOffset = 5;
  const minWidth = 10; // must be some width to render
  const minHeight = 10; // must be some height to render
  /*
  It should look like this:
  ---------AD----------
  ---------AD----------
  =======MARKER========
  ---------AD----------
  ---------AD----------
  */
  return {
    width: minWidth,
    height: minHeight,
    top: middle - middleOffset,
    position: "absolute",
  };
};

const styles = {
  children: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  containerAdditionalHeight: {
    height: spacing(8),
  },
  placeholderContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    minHeight: "auto", // Prevent flex shrinking it
  },
  placeholderText: {
    backgroundColor: colours.functional.backgroundPrimary,
    borderColor: colours.functional.keyline,
    borderStyle: "solid",
    borderWidth: 1,
    color: colours.functional.secondary,
    ...fontFactory({
      font: "body",
      fontSize: "puffLink",
    }),
    letterSpacing: 1.5,
    paddingBottom: spacing(1),
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    paddingTop: spacing(1),
    zIndex: 1,
  },
  placeholderWrapper: {
    alignItems: "center",
    backgroundColor: colours.functional.backgroundPrimary,
    borderColor: colours.functional.keyline,
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  sponsoredAdWrapper: {
    borderTopWidth: 1,
    borderColor: colours.functional.keyline,
  },
  sponsoredAd: {
    flex: 0,
    height: 350,
  },
  inlineAd: {
    marginTop: 0,
    borderLeftWidth: 1,
    paddingLeft: spacing(2),
    borderColor: colours.functional.keyline,
  },
  inlineAdTitle: {
    width: "100%",
    height: 20,
    margin: 0,
    justifyContent: "center",
    backgroundColor: colours.functional.backgroundSecondary,
  },
  inlineAdTitleText: {
    fontFamily: fonts.supporting,
    fontSize: 12,
    lineHeight: 12,
    marginLeft: spacing(1),
    color: colours.functional.secondary,
  },
};

export default StyleSheet.create(styles);
