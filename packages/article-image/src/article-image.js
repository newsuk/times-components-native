import React from "react";
import { View } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import ArticleImage from "./article-image.base";
import { propTypes, defaultPropTypes } from "./article-image-prop-types";
import styles from "./styles";

const ArticleImageNative = (props) => {
  const { isTablet, narrowArticleBreakpoint } = useResponsiveContext();
  const {
    imageOptions: { display, uri, narrowContent },
  } = props;

  return (
    <View
      key={uri}
      style={[
        styles[`${display}Container`],
        isTablet && styles[`${display}ContainerTablet`],
        narrowContent && [
          styles[`${display}ContainerNarrow`],
          {
            width:
              display !== "inline" ? narrowArticleBreakpoint.content : "auto",
          },
        ],
      ]}
    >
      <ArticleImage {...props} />
    </View>
  );
};

ArticleImageNative.propTypes = propTypes;
ArticleImageNative.defaultProps = defaultPropTypes;

export default ArticleImageNative;
