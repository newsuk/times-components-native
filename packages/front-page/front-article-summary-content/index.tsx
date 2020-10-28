import styles from "./styles";
import renderTrees from "@times-components-native/markup-forest/src/markup-forest";
import { getRenderers } from "../front-renderer";
import React from "react";
import {
  BylineInput,
  Markup,
} from "@times-components-native/fixture-generator/src/types";
import { ArticleColumns } from "@times-components-native/article-columns/article-columns";
import { Text, TextStyle } from "react-native";
import { transformContentForFront } from "@times-components-native/front-page/utils/transform-content-for-front";
interface Props {
  summary: Markup;
  summaryStyle?: any;
  columnCount?: number;
  bylines: BylineInput[];
  numberOfLines: number;
  justified?: boolean;
  contentWidth: number;
  contentHeight: number;
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
    <Text numberOfLines={numberOfLines} style={style}>
      {renderTrees(ast, getRenderers({ addNewLine: true }))}
    </Text>
  ) : null;
};
const FrontArticleSummaryContent: React.FC<Props> = (props) => {
  const {
    contentHeight,
    contentWidth,
    summary,
    summaryStyle,
    numberOfLines,
    justified = false,
    columnCount = 1,
  } = props;

  if (!summary) return null;

  const transformedAst = transformContentForFront(summary, justified);

  const style = {
    ...styles.summary,
    ...summaryStyle,
    ...(justified && { textAlign: "justify" }),
  } as TextStyle;
  const lineHeight = style.lineHeight || 20;
  if (columnCount > 1) {
    return (
      <ArticleColumns
        bylines={props.bylines}
        style={style}
        articleContents={transformedAst}
        columnCount={columnCount}
        containerHeight={contentHeight}
        containerWidth={contentWidth}
        lineHeight={lineHeight}
      />
    );
  }
  return (
    <SummaryText
      ast={transformedAst}
      style={style}
      numberOfLines={numberOfLines}
    />
  );
};
export default FrontArticleSummaryContent;
