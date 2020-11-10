import React, { memo } from "react";
import { View } from "react-native";

import ArticleImage from "@times-components-native/article-image";
import renderTrees from "@times-components-native/markup-forest";
import getRenderers from "@times-components-native/article-skeleton/src/article-body/article-body-row.js";
import { ParagraphContent } from "@times-components-native/types";
import { useInlineMeasurementDispatchContext } from "./InlineMeasurementDispatchContext";
import { ArticleImageProps, SkeletonProps } from "../types";

interface Props {
  content: ParagraphContent;
  skeletonProps: SkeletonProps;
}

export const MeasureContent: React.FC<Props> = memo(
  ({ content, skeletonProps }) => {
    const dispatch = useInlineMeasurementDispatchContext();

    const inlineContent = {
      ...content,
      attributes: { ...content.attributes, inline: true },
    };

    const { data, isTablet, narrowContent, scale } = skeletonProps;

    return (
      <View
        onLayout={(event) => {
          const height = Math.floor(event.nativeEvent.layout.height);
          dispatch({
            type: "SET_INLINE_CONTENT_HEIGHT",
            id: inlineContent.id!,
            payload: height,
          });
        }}
      >
        {renderTrees(
          [inlineContent],
          getRenderers({
            data,
            interactiveConfig: {},
            onLinkPress: null,
            onTwitterLinkPress: null,
            onVideoPress: null,
            onImagePress: null,
            isTablet,
            adConfig: {},
            images: [],
            dropcapsDisabled: true,
            dropCapFont: "dropCap",
            scale,
            analyticsStream: null,
            narrowContent,
            onParagraphTextLayout: (event: any) => {
              const lines = event.nativeEvent.lines;
              dispatch({
                type: "SET_INLINE_CONTENT_LINES",
                id: inlineContent.id!,
                payload: lines,
              });
            },
          }),
        )}
      </View>
    );
  },
);

export const MeasureItem: React.FC<{
  itemProps: ArticleImageProps;
  width: number;
}> = memo(({ itemProps, width }) => {
  const dispatch = useInlineMeasurementDispatchContext();

  if (!itemProps || !width)
    dispatch({
      type: "SET_INLINE_ITEM_HEIGHT",
      height: 0,
    });

  return (
    <View
      style={{ width }}
      onLayout={(event) => {
        const height = event.nativeEvent.layout.height;
        dispatch({
          type: "SET_INLINE_ITEM_HEIGHT",
          height,
        });
      }}
    >
      <ArticleImage {...itemProps} />
    </View>
  );
});
