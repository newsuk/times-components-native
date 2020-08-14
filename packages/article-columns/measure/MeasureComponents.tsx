import renderTrees from "@times-components-native/markup-forest";
import React, { memo } from "react";
import { TextStyle, View } from "react-native";
import Byline from "@times-components-native/article-byline";
import {
  Bylines,
  ParagraphContent,
} from "@times-components-native/article-columns/domain-types";
import { getRenderers } from "@times-components-native/front-page/front-renderer";

import { useMeasurementDispatchContext } from "./MeasurementDispatchContext";
import { ColumnParameters } from "@times-components-native/article-columns/types";

interface Props {
  content: ParagraphContent;
  style: TextStyle;
}
export const MeasureContent: React.FC<Props> = memo(({ content, style }) => {
  const dispatch = useMeasurementDispatchContext();

  return (
    <View
      onLayout={(event) => {
        const height = Math.floor(event.nativeEvent.layout.height);
        dispatch({
          type: "SET_CONTENT_HEIGHT",
          id: content.id!,
          payload: height,
        });
      }}
    >
      {renderTrees(
        [content],
        getRenderers({
          renderOptions: style,
          onParagraphTextLayout: (event: any) => {
            const lines = event.nativeEvent.lines;
            dispatch({
              type: "SET_CONTENT_LINES",
              id: content.id!,
              payload: lines,
            });
          },
        }),
      )}
    </View>
  );
});

export const MeasureByline: React.FC<{
  bylines: Bylines;
  columnParameters: ColumnParameters;
}> = memo(({ bylines, columnParameters }) => {
  const dispatch = useMeasurementDispatchContext();

  return (
    <View
      style={{ width: columnParameters.columnWidth }}
      onLayout={(event) => {
        const height = event.nativeEvent.layout.height;
        dispatch({ type: "SET_BYLINE_HEIGHT", payload: height });
      }}
    >
      <Byline ast={bylines} />
    </View>
  );
});
