import React from "react";
import PropTypes from "prop-types";
import styles from "../styles";

import { ModalImage } from "@times-components-native/image";
import {
  articleLeftColumnPropTypes,
  articleLeftColumnDefaultProps
} from "./article-left-column-prop-types";

const ArticleLeftColumn = ({
  authorImage,
}) => (
  <ModalImage
  aspectRatio={1}
  style={styles.authorImage}
  uri={authorImage}
  onImagePress={onImagePress ? () => onImagePress(0) : undefined}
  rounded
  />
);

ArticleLeftColumn.propTypes = {
  ...articleLeftColumnPropTypes,
  onImagePress: PropTypes.func.isRequired
};

ArticleLeftColumn.defaultProps = articleLeftColumnDefaultProps;

export default ArticleLeftColumn;
