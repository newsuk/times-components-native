import stylesFactory from "./styles";
import { indent } from "@times-components-native/front-page/indent";
import { ArticleSummaryContent } from "@times-components-native/article-summary";
import renderTrees from "@times-components-native/markup-forest/src/markup-forest";
import { getRenderers } from "../front-renderer";
import React, { useContext } from "react";
import { ResponsiveContext } from "@times-components-native/responsive";
import {
  Byline,
  Markup,
} from "@times-components-native/fixture-generator/src/types";
import { MeasureContainer } from "@times-components-native/front-page/MeasureContainer";
import { ArticleColumns } from "@times-components-native/article-columns/article-columns";
import { TextStyle } from "react-native";

interface Props {
  summary: Markup;
  summaryStyle?: any;
  columnCount?: number;
  bylines: Byline;
}
const FrontArticleSummaryContent: React.FC<Props> = (props) => {
  const { summary, summaryStyle, columnCount = 1 } = props;

  // @ts-ignore
  const { editionBreakpoint: breakpoint, orientation } = useContext(
    ResponsiveContext,
  );

  if (!summary) return null;

  const styles = stylesFactory(breakpoint);

  const indentedAst = indent(summary);

  const textStyle =
    orientation === "landscape" ? styles.textLandscape : styles.textPortrait;
  const lineHeight = textStyle.lineHeight;
  const style = [summaryStyle, textStyle] as TextStyle;

  if (columnCount > 1) {
    return (
      <MeasureContainer
        render={({ width, height }) => {
          return (
            // TODO if we pass 0 height into ArticleColumns, we run into a infinite loop in chunkContentIntoColumns as there's no height to allocate columns into - how do we handle this better - or is this okay?
            <ArticleColumns
              bylines={props.bylines}
              style={style}
              articleContents={indentedAst}
              columnCount={columnCount}
              containerHeight={height}
              containerWidth={width}
              lineHeight={lineHeight}
            />
          );
        }}
      />
    );
  }

  return (
    <MeasureContainer
      render={(whiteSpaceHeight) => (
        <ArticleSummaryContent
          ast={indentedAst}
          style={style}
          lineHeight={lineHeight}
          whiteSpaceHeight={whiteSpaceHeight}
          initialLines={0}
          renderAst={(ast) => renderTrees(ast, getRenderers({}))}
        />
      )}
    />
  );
};

export default FrontArticleSummaryContent;
