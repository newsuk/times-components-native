import stylesFactory from "./styles";
import { indent } from "@times-components-native/front-page/indent";
import { ArticleSummaryContent } from "@times-components-native/article-summary";
import renderTrees from "@times-components-native/markup-forest/src/markup-forest";
import PropTypes from "prop-types";
import frontRenderers from "../front-renderer";
import React, { useContext } from "react";
import { ResponsiveContext } from "@times-components-native/responsive";

const FrontArticleSummaryContent = (props) => {
  const {
    summary,
    summaryStyle,
    whiteSpaceHeight,
    linesOfTeaserToRender,
  } = props;

  const { editionBreakpoint: breakpoint, orientation } = useContext(
    ResponsiveContext,
  );

  if (!summary) return null;

  const styles = stylesFactory(breakpoint);

  const indentedAst = indent(summary);
  return (
    <ArticleSummaryContent
      ast={indentedAst}
      style={[
        summaryStyle,
        orientation === "landscape"
          ? styles.textLandscape
          : styles.textPortrait,
      ]}
      whiteSpaceHeight={whiteSpaceHeight}
      initialLines={linesOfTeaserToRender}
      renderAst={(ast) => renderTrees(ast, frontRenderers)}
    />
  );
};

FrontArticleSummaryContent.propTypes = {
  summary: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  summaryStyle: PropTypes.shape({}),
  whiteSpaceHeight: PropTypes.number,
  linesOfTeaserToRender: PropTypes.number,
};

FrontArticleSummaryContent.defaultProps = {
  ast: [],
  className: "",
  style: null,
};

export default FrontArticleSummaryContent;
