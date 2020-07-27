import { colours, tabletWidth } from "@times-components-native/styleguide";

const sharedStyles = {
  topicsContainer: {
    borderTopColor: colours.functional.keyline,
    borderTopWidth: 1,
  },
  topicsContainerTablet: {
    alignSelf: "center",
    width: tabletWidth,
  },
  narrow: {
    width: "100%",
  },
  topicsMetaContainer: {
    justifyContent: "flex-start",
  },
};

export default sharedStyles;
