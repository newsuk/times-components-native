import React, { Fragment } from "react";
import { Text, View } from "react-native";
import {
  ArticleBylineWithLinks,
  hasBylineData
} from "@times-components-native/article-byline";
import PropTypes from "prop-types";
import styles from "../styles";

import { ModalImage } from "@times-components-native/image";
import {
  articleLeftColumnPropTypes,
  articleLeftColumnDefaultProps
} from "./article-left-column-prop-types";

const ArticleLeftColumn = ({
  authorImage,
  bylines,
  onAuthorPress,
  onImagePress,
}) => (
  <View style={styles.leftColumnContainer}>
    {hasBylineData(bylines) && (
      <Fragment>
        <View style={styles.meta}>
          <ArticleBylineWithLinks ast={bylines} onAuthorPress={onAuthorPress} />
        </View>
      </Fragment>
    )}
    <ModalImage
    aspectRatio={1.5}
    style={styles.authorImage}
    uri={authorImage}
    onImagePress={onImagePress ? () => onImagePress(0) : undefined}
    />
  </View>
);

ArticleLeftColumn.propTypes = {
  ...articleLeftColumnPropTypes,
  onImagePress: PropTypes.func.isRequired
};

ArticleLeftColumn.defaultProps = articleLeftColumnDefaultProps;

export default ArticleLeftColumn;
