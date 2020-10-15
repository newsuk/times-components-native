import renderTrees from "@times-components-native/markup-forest";
import React, { memo } from "react";
import { View } from "react-native";
import { ParagraphContent } from "../domain-types";
import getRenderers from "@times-components-native/article-skeleton/src/article-body/article-body-row.js";
// import { getRenderers } from "@times-components-native/front-page/front-renderer";

import { useInlineMeasurementDispatchContext } from "./InlineMeasurementDispatchContext";

interface Props {
  content: ParagraphContent;
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
