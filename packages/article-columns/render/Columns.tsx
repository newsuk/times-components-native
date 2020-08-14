import renderTrees from "@times-components-native/markup-forest";
import React from "react";
import { StyleSheet, View, TextStyle } from "react-native";

import { spacing } from "@times-components-native/styleguide";
import { ArticleContent } from "@times-components-native/article-columns/domain-types";
import {
  ColumnContents,
  ColumnParameters,
} from "@times-components-native/article-columns/types";
import { getRenderers } from "@times-components-native/front-page/front-renderer";
import { appendInvisibleLineToArticleContent } from "@times-components-native/article-columns/utils/appendInvisibleLineToArticleContent";

const justifyLastLine = (contents: ArticleContent[]): ArticleContent[] =>
  contents.map((content) =>
    content.split ? appendInvisibleLineToArticleContent(content) : content,
  );

export const Columns: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <View testID="Columns:Container" style={styles.articleColumns}>
    {children}
  </View>
);
export const SingleColumn: React.FC<{
  columnParameters: ColumnParameters;
  column: ColumnContents;
  style: TextStyle;
  renderBefore?: () => React.ReactNode;
}> = ({ columnParameters, column, renderBefore, style }) => {
  return (
    <View
      style={[
        styles.marginRight,
        {
          width: columnParameters.columnWidth,
        },
      ]}
    >
      {renderBefore && renderBefore()}
      <View testID={"SingleColumn:Content"}>
        {renderTrees(
          justifyLastLine(column),
          getRenderers({ renderOptions: style, addNewLine: false }),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  articleColumns: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  marginRight: {
    marginRight: spacing(2),
  },
});
