import stylesFactory from "./styles";
import { indent } from "@times-components-native/front-page/indent";
import { ArticleSummaryContent } from "@times-components-native/article-summary";
import renderTrees from "@times-components-native/markup-forest/src/markup-forest";
import frontRenderers from "../front-renderer";
import React, { useContext } from "react";
import { ResponsiveContext } from "@times-components-native/responsive";
import { Markup } from "@times-components-native/fixture-generator/src/types";
import { MeasureContainer } from "@times-components-native/front-page/MeasureContainer";

interface Props {
  summary: Markup;
  summaryStyle?: any;
}
const FrontArticleSummaryContent: React.FC<Props> = (props) => {
  const { summary, summaryStyle } = props;

  // @ts-ignore
  const { editionBreakpoint: breakpoint, orientation } = useContext(
    ResponsiveContext,
  );

  if (!summary) return null;

  const styles = stylesFactory(breakpoint);

  const indentedAst = indent(summary);

  const textStyle =
    orientation === "landscape" ? styles.textLandscape : styles.textPortrait;
  return (
    <MeasureContainer
      render={(whiteSpaceHeight) => (
        <ArticleSummaryContent
          ast={indentedAst}
          style={[summaryStyle, textStyle]}
          lineHeight={textStyle.lineHeight}
          whiteSpaceHeight={whiteSpaceHeight}
          initialLines={0}
          renderAst={(ast) => renderTrees(ast, frontRenderers)}
        />
      )}
    />
  );
};

export default FrontArticleSummaryContent;
