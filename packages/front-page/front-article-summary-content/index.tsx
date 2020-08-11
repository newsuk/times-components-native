import stylesFactory from "./styles";
import { indent } from "@times-components-native/front-page/indent";
import { ArticleSummaryContent } from "@times-components-native/article-summary";
import renderTrees from "@times-components-native/markup-forest/src/markup-forest";
import PropTypes from "prop-types";
import frontRenderers from "../front-renderer";
import React, { useContext } from "react";
import { ResponsiveContext } from "@times-components-native/responsive";
import { Markup } from "@times-components-native/fixture-generator/src/types";

interface Props {
  summary: Markup;
  summaryStyle?: any;
  whiteSpaceHeight: number | undefined;
  linesOfTeaserToRender: number | undefined;
}
const FrontArticleSummaryContent: React.FC<Props> = (props) => {
  const {
    summary,
    summaryStyle,
    whiteSpaceHeight,
    linesOfTeaserToRender,
  } = props;

  // @ts-ignore
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
  summaryStyle: PropTypes.shape({}),
  whiteSpaceHeight: PropTypes.number,
  linesOfTeaserToRender: PropTypes.number,
};

export default FrontArticleSummaryContent;
