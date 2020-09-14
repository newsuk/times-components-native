import React from "react";
import { View } from "react-native";
import { ResponsiveContext } from "@times-components-native/responsive";
import ArticleImage from "./article-image.base";
import { propTypes, defaultPropTypes } from "./article-image-prop-types";
import styles from "./styles";

const ArticleImageNative = (props) => {
  const {
    imageOptions: { display, uri, narrowContent },
  } = props;

  return (
    <ResponsiveContext.Consumer>
      {({ isTablet, narrowArticleBreakpoint }) => (
        <View
          key={uri}
          style={[
            styles[`${display}Container`],
            isTablet && styles[`${display}ContainerTablet`],
            narrowContent && [
              styles[`${display}ContainerNarrow`],
              {
                width:
                  display !== "inline"
                    ? narrowArticleBreakpoint.content
                    : "auto",
              },
            ],
          ]}
        >
          <ArticleImage {...props} />
        </View>
      )}
    </ResponsiveContext.Consumer>
  );
};

ArticleImageNative.propTypes = propTypes;
ArticleImageNative.defaultProps = defaultPropTypes;

export default ArticleImageNative;
