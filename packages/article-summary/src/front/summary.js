import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import ArticleByline, {
  ArticleBylineOpinion,
  articleBylinePropTypes,
} from "@times-components-native/article-byline";

function Byline(props) {
  const { ast, isOpinionByline, bylineClass } = props;

  if (!ast || ast.length === 0) return null;

  const BylineComponent = isOpinionByline
    ? ArticleBylineOpinion
    : ArticleByline;

  return (
    <Text>
      <BylineComponent {...props} className={bylineClass} />
    </Text>
  );
}

function FrontArticleSummary(props) {
  const { bylineProps, content, headline, style, strapline } = props;

  const byline = bylineProps ? <Byline {...bylineProps} /> : null;

  if (props.debug) {
    console.log("article summary style", style);
  }

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
    bylineClass: PropTypes.string,
    isOpinionByline: PropTypes.bool,
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
