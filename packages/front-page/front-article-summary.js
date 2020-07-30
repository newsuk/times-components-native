import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import ArticleByline, {
  articleBylinePropTypes,
} from "@times-components-native/article-byline";
import styles from "./styles";

function Byline(props) {
  const { ast } = props;

  if (!ast || ast.length === 0) return null;

  return (
    <Text style={styles.bylineContainer}>
      <ArticleByline {...props} />
    </Text>
  );
}

function FrontArticleSummary(props) {
  const { bylineProps, content, headline, style, strapline } = props;

  const byline = bylineProps ? <Byline {...bylineProps} /> : null;

  return (
    <View style={style}>
      {headline}
      {strapline}
      {byline}
      {content}
    </View>
  );
}

FrontArticleSummary.propTypes = {
  bylineProps: PropTypes.shape({
    ...articleBylinePropTypes,
  }),
  content: PropTypes.node,
  headline: PropTypes.node,
  strapline: PropTypes.node,
  style: PropTypes.shape({}),
};

FrontArticleSummary.defaultProps = {
  bylineProps: null,
  content: null,
  headline: null,
  strapline: null,
  style: null,
};

export default FrontArticleSummary;
