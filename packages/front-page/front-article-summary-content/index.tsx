import stylesFactory from "./styles";
import { indent } from "@times-components-native/front-page/indent";
import renderTrees from "@times-components-native/markup-forest/src/markup-forest";
import { getRenderers } from "../front-renderer";
import React, { useContext } from "react";
import { ResponsiveContext } from "@times-components-native/responsive";
import {
  BylineInput,
  Markup,
} from "@times-components-native/fixture-generator/src/types";
import { MeasureContainer } from "@times-components-native/front-page/MeasureContainer";
import { ArticleColumns } from "@times-components-native/article-columns/article-columns";
import { Text, TextStyle } from "react-native";
import styles from "@times-components-native/article-summary/src/styles";

interface Props {
  summary: Markup;
  summaryStyle?: any;
  columnCount?: number;
  bylines: BylineInput[];
}

interface SummaryTextProps {
  ast: Markup;
  style: TextStyle;
  numberOfLines: number;
}

const SummaryText: React.FC<SummaryTextProps> = ({
  ast,
  style,
  numberOfLines,
}) => {
  return ast.length > 0 ? (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {renderTrees(ast, getRenderers({ addNewLine: true }))}
    </Text>
  ) : null;
};

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
  const numberOfLinesToRender = (height: number) => height / lineHeight;

  if (columnCount > 1) {
    return (
      <MeasureContainer
        render={({ width, height }) => (
          <ArticleColumns
            bylines={props.bylines}
            style={style}
            articleContents={indentedAst}
            columnCount={columnCount}
            containerHeight={height}
            containerWidth={width}
            lineHeight={lineHeight}
          />
        )}
      />
    );
  }

  return (
    <MeasureContainer
      render={({ height }) => (
        <SummaryText
          ast={indentedAst}
          style={style}
          numberOfLines={numberOfLinesToRender(height)}
        />
      )}
    />
  );
};

export default FrontArticleSummaryContent;
