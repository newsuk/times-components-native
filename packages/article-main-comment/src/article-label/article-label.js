import React from "react";
import { View } from "react-native";
import ArticleLabel from "@times-components-native/article-label";
import VideoLabel from "@times-components-native/video-label";
import Context from "@times-components-native/context";
import { colours } from "@times-components-native/styleguide";

import {
  articleLabelPropTypes,
  articleLabelDefaultProps,
} from "./article-label-prop-types";
import styles from "../styles";

const HeaderLabel = ({ isVideo, label }) => {
  if (!isVideo && !label) return null;

  const Label = isVideo ? VideoLabel : ArticleLabel;

  return (
    <Context.Consumer>
      {({ theme: { sectionColour } }) => (
        <View style={styles.label}>
          <Label
            color={sectionColour || colours.section.default}
            title={label}
          />
        </View>
      )}
    </Context.Consumer>
  );
};

HeaderLabel.propTypes = articleLabelPropTypes;
HeaderLabel.defaultProps = articleLabelDefaultProps;

export default HeaderLabel;
