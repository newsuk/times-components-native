import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { renderAst as defaultRenderAst } from "./renderAst";
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
      testID={"article-summary-content"}
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
