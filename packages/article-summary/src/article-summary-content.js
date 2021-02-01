import React from "react";
import { Dimensions, Text } from "react-native";
import PropTypes from "prop-types";
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
  const { fontScale } = Dimensions.get("screen");
  const numberOfLinesToRender =
    whiteSpaceHeight > 0
      ? whiteSpaceHeight / (lineHeight * fontScale) + initialLines
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
  ast: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

ArticleSummaryContent.defaultProps = {
  ast: [],
  className: "",
  style: null,
};

export default ArticleSummaryContent;
