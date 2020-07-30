import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { propTypes as treePropType } from "@times-components-native/markup-forest";
import styles from "../article-summary/src/styles";
import { indent } from "./indent";
import renderTrees from "@times-components-native/markup-forest/src/markup-forest";
import frontRenderers from "./front-renderer";

const FrontArticleSummaryContent = ({
  ast,
  className,
  style,
  whiteSpaceHeight,
  initialLines = 2,
}) => {
  const lineHeight = (style && style.lineHeight) || styles.text.lineHeight;
  const numberOfLinesToRender =
    whiteSpaceHeight > 0
      ? whiteSpaceHeight / lineHeight + initialLines
      : initialLines;

  const numberOfLinesProp = whiteSpaceHeight !== undefined && {
    numberOfLines: numberOfLinesToRender,
  };

  const indentedAst = indent(ast);

  return ast.length > 0 ? (
    <Text
      className={className}
      style={[styles.text, style]}
      {...numberOfLinesProp}
    >
      {renderTrees(indentedAst, frontRenderers)}
    </Text>
  ) : null;
};

FrontArticleSummaryContent.propTypes = {
  ast: PropTypes.arrayOf(treePropType),
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

FrontArticleSummaryContent.defaultProps = {
  ast: [],
  className: "",
  style: null,
};

export default FrontArticleSummaryContent;
