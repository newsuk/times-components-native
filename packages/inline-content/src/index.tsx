import React, { useCallback } from "react";
import { View } from "react-native";

import {
  renderers,
  Gutter,
  ErrorBoundary,
} from "@times-components-native/article-skeleton";
import { render } from "@times-components-native/markup-forest";
import { useResponsiveContext } from "@times-components-native/responsive";
import {
  tabletWidth,
  getNarrowArticleBreakpoint,
} from "@times-components-native/styleguide";
import { ParagraphContent } from "@times-components-native/types";

import { MeasureInlineContent } from "./measure/MeasureInlineContent";
import { assignWithId } from "./utils/assignWithId";
import { chunkInlineContent } from "./utils/chunkInlineContent";
import { getInlineItemProps } from "./utils/getInlineItemProps";
import { renderInlineItem } from "./utils/renderInlineItem";
import { InlineContentProps } from "./types";

import styles from "./styles";

const InlineContent = (props: InlineContentProps) => {
  const { defaultFont, inlineContent, narrowContent, skeletonProps } = props;
  const { windowWidth } = useResponsiveContext();
  const { lineHeight } = defaultFont;
  const availableWidth = Math.min(
    windowWidth,
    narrowContent
      ? getNarrowArticleBreakpoint(windowWidth).content
      : tabletWidth,
  );
  const inlineItemWidth = availableWidth * 0.35;
  const inlineContentWidth = availableWidth - inlineItemWidth;

  // const adHeaderHeight = spacing(4);
  // const adHorizontalSpacing = 21;
  // const adMarginBottom = spacing(2);
  // const adContainerHeight = height + adHeaderHeight;
  // const adContainerHeightPlusMargin = adContainerHeight + adMarginBottom;
  // const adContainerWidth = width + adHorizontalSpacing;

  // const contentWidth = tabletWidth - adContainerWidth;
  // const contentHeight = adContainerHeightPlusMargin;

  const renderChild = render(
    // @ts-ignore
    renderers({ dropcapsDisabled: true, ...skeletonProps }),
  );

  const Child = useCallback(({ item, index }, inline = false) => {
    item.attributes = { ...item.attributes, inline };
    return (
      <Gutter style={{ overflow: "hidden" }}>
        <ErrorBoundary>
          {renderChild(item, index.toString(), index)}
        </ErrorBoundary>
      </Gutter>
    );
  }, []);

  const renderItem = (inline: boolean) => (
    item: ParagraphContent,
    index: number,
  ) => Child({ item, index }, inline);

  const paragraphs = inlineContent
    .filter((c) => c.name === "paragraph")
    .map(assignWithId(inlineContentWidth));

  const itemProps = getInlineItemProps(props, inlineItemWidth);

  if (!itemProps) return paragraphs.map(renderItem(false));

  const contentParameters = {
    contentWidth: inlineContentWidth,
    // contentHeight: inlineContentHeight,
    contentHeight: 0,
    contentLineHeight: lineHeight,
    itemWidth: inlineItemWidth,
  };

  return (
    <MeasureInlineContent
      content={paragraphs}
      contentParameters={contentParameters}
      itemProps={itemProps}
      skeletonProps={skeletonProps}
      renderMeasuredContents={(contentMeasurements) => {
        const { chunks, currentInlineContentHeight } = chunkInlineContent(
          paragraphs,
          contentMeasurements,
          contentParameters,
        );

        // const itemHeight =
        //   contentMeasurements.itemHeight || inlineContentHeight || 0;
        const itemHeight = contentMeasurements.itemHeight || 0;

        const requiredInlineContentHeight = Math.max(
          currentInlineContentHeight,
          itemHeight,
        );

        const chunkedInlineContent = chunks[0] || [];
        const chunkedOverflowContent = chunks[1] || [];

        return (
          <>
            <View
              style={[
                styles.container,
                { height: requiredInlineContentHeight },
              ]}
            >
              <View
                style={[
                  narrowContent
                    ? styles.inlineItemNarrowContainer
                    : styles.inlineItemContainer,
                  { width: inlineItemWidth, height: itemHeight },
                ]}
              >
                {renderInlineItem(itemProps)}
              </View>
              <View
                style={{
                  height: requiredInlineContentHeight,
                  width: inlineContentWidth,
                }}
              >
                {chunkedInlineContent.map(renderItem(true))}
              </View>
            </View>
            {chunkedOverflowContent.map(renderItem(false))}
          </>
        );
      }}
    />
  );
};

export default InlineContent;
