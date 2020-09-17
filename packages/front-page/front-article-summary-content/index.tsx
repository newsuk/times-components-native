import stylesFactory from "./styles";
import renderTrees from "@times-components-native/markup-forest/src/markup-forest";
import { getRenderers } from "../front-renderer";
import React, { useContext } from "react";
import { ResponsiveContext } from "@times-components-native/responsive";
import {
  BylineInput,
  Markup,
  TemplateType,
} from "@times-components-native/fixture-generator/src/types";
import { MeasureContainer } from "@times-components-native/front-page/MeasureContainer";
import { ArticleColumns } from "@times-components-native/article-columns/article-columns";
import { Text, TextStyle } from "react-native";
import styles from "@times-components-native/article-summary/src/styles";
import { transformContentForFront } from "@times-components-native/front-page/utils/transform-content-for-front";

interface Props {
  summary: Markup;
  summaryStyle?: any;
  columnCount?: number;
  bylines: BylineInput[];
  template: TemplateType;
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
  const { summary, summaryStyle, template, columnCount = 1 } = props;

  // @ts-ignore
  const { editionBreakpoint: breakpoint, orientation } = useContext(
    ResponsiveContext,
  );

  if (!summary) return null;

  const styles = stylesFactory(breakpoint);

  const transformedAst = transformContentForFront(summary, template);

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
            articleContents={transformedAst}
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
          ast={transformedAst}
          style={style}
          numberOfLines={numberOfLinesToRender(height)}
        />
      )}
    />
  );
};

export default FrontArticleSummaryContent;
