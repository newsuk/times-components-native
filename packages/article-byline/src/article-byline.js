/* eslint-disable react/prop-types */
import React from "react";
import { Text } from "react-native";
import renderByline from "./render-byline";
import { defaultProps, propTypes } from "./article-byline-prop-types";
import styles from "./styles";

const AuthorComponent = ({ children, bylineStyle }) => (
  <Text style={[styles.nonLinkText, bylineStyle]}>{children}</Text>
);

const ArticleByline = ({ ast, ...props }) =>
  renderByline(AuthorComponent, ast, styles.nonLinkText, props);

ArticleByline.displayName = "ArticleByline";

ArticleByline.propTypes = propTypes;
ArticleByline.defaultProps = defaultProps;

export { default as ArticleBylineOpinion } from "./article-byline-opinion";
export { default as ArticleBylineWithLinks } from "./article-byline-with-links";
export { default as hasBylineData } from "./has-byline-data";
export default ArticleByline;
