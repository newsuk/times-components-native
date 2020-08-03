import React, { useContext } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { propTypes as treePropType } from "@times-components-native/markup-forest";
import stylesFactory from "./styles";
import { indent } from "./indent";
import renderTrees from "@times-components-native/markup-forest/src/markup-forest";
import frontRenderers from "./front-renderer";
import { ResponsiveContext } from "@times-components-native/responsive";

const FrontArticleSummaryContent = ({
  ast,
  className,
  style,
  whiteSpaceHeight,
  initialLines = 2,
}) => {
  const { editionBreakpoint: breakpoint, orientation } = useContext(
    ResponsiveContext,
  );
  const styles = stylesFactory(breakpoint);
  const lineHeight =
    (style && style.lineHeight) || orientation === "landscape"
      ? styles.textLandscape.lineHeight
      : styles.textPortrait.lineHeight;
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
      style={[
        orientation === "landscape"
          ? styles.textLandscape
          : styles.textPortrait,
        style,
      ]}
      {...numberOfLinesProp}
    >
      {renderTrees(indentedAst, frontRenderers)}
    </Text>
  ) : null;
};

FrontArticleSummaryContent.propTypes = {
  ast: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

FrontArticleSummaryContent.defaultProps = {
  ast: [],
  className: "",
  style: null,
};

export default FrontArticleSummaryContent;
