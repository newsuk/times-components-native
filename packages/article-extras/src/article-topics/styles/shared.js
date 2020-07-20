import {
  colours,
  tabletWidth,
  narrowArticleContentWidth,
} from "@times-components-native/styleguide";

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
    maxWidth: narrowArticleContentWidth,
  },
  topicsMetaContainer: {
    justifyContent: "flex-start",
  },
};

export default sharedStyles;
