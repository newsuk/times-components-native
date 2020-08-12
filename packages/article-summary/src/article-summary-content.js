import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { propTypes as treePropType } from "@times-components-native/markup-forest";
import { renderAst as defaultRenderAst } from "./article-summary";
import styles from "./styles";

const ArticleSummaryContent = ({
  ast,
  className,
  style,
  whiteSpaceHeight,
  initialLines = 2,
  lineHeight = styles.text.lineHeight,
  renderAst = defaultRenderAst,
}) => {
  const numberOfLinesToRender =
    whiteSpaceHeight > 0
      ? whiteSpaceHeight / lineHeight + initialLines
      : initialLines;

  const numberOfLinesProp = whiteSpaceHeight !== undefined && {
    numberOfLines: numberOfLinesToRender,
  };

  return ast.length > 0 ? (
    <Text
      className={className}
      style={[styles.text, style]}
      {...numberOfLinesProp}
    >
      {renderAst(ast)}
    </Text>
  ) : null;
};

ArticleSummaryContent.propTypes = {
  ast: PropTypes.arrayOf(treePropType),
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ArticleSummaryContent.defaultProps = {
  ast: [],
  className: "",
  style: null,
};

export default ArticleSummaryContent;
