import React, { useCallback } from "react";
import { View, Text } from "react-native";

import { ParagraphContent } from "@times-components-native/types";
import {
  spacing,
  tabletWidth,
  getNarrowArticleBreakpoint,
} from "@times-components-native/styleguide";
import { render } from "@times-components-native/markup-forest";
import { screenWidth } from "@times-components-native/utils";
import {
  renderers,
  Gutter,
  ErrorBoundary,
} from "@times-components-native/article-skeleton";
import ArticleImage from "@times-components-native/article-image";
// import PullQuote from "@times-components-native/pull-quote";

import { chunkInlineContent } from "./utils/chunkInlineContent";
import { MeasureInlineContent } from "./measure/MeasureInlineContent";

import styles from "./styles";
import { SkeletonProps } from "./types";

const assignWithId = (height: number) => (
  content: ParagraphContent,
  idx: number,
): ParagraphContent => {
  return {
    ...content,
    id: `${idx}-${height}`, //suffixing the height ensures that we re-measure the content if the orientation changes - and that we don't unnecessarily re-measure if orientation changes back
  };
};

interface Props {
  adConfig: Record<string, unknown>;
  defaultFont: { lineHeight: number };
  display: string;
  height: number;
  inlineContent: ParagraphContent[];
  originalName: string;
  skeletonProps: SkeletonProps;
  slotName: string;
  width: number;
}

const InlineContent = (props: Props) => {
  const {
    defaultFont,
    inlineContent,
    narrowContent,
    originalName,
    skeletonProps,
  } = props;

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

  // let Component = (
  //   <View>
  //     <Text>Bibble</Text>
  //   </View>
  // );

  // if (originalName === "image") {
  const {
    caption,
    credits,
    display,
    imageIndex,
    // narrowContent,
    onImagePress,
    ratio,
    relativeWidth,
    relativeHeight,
    relativeHorizontalOffset,
    relativeVerticalOffset,
    url,
  } = props;

  const articleImageProps = {
    captionOptions: {
      caption,
      credits,
    },
    onImagePress,
    images: [],
    imageOptions: {
      display,
      ratio,
      index: imageIndex,
      uri: url,
      relativeWidth,
      relativeHeight,
      relativeHorizontalOffset,
      relativeVerticalOffset,
      narrowContent,
    },
  };

  // Component = <ArticleImage {...articleImageProps} />;
  // }

  const { lineHeight } = defaultFont;

  const availableWidth = Math.min(
    screenWidth(),
    narrowContent
      ? getNarrowArticleBreakpoint(screenWidth()).content
      : tabletWidth,
  );

  const inlineItemWidth = availableWidth * 0.35;
  const gutters = (screenWidth() - availableWidth) / 2 + spacing(2);
  // const inlineContentWidth = availableWidth - inlineItemWidth - gutters;
  const inlineContentWidth = availableWidth - inlineItemWidth;

  const [ratioWidth, ratioHeight] = ratio.split(":");
  const aspectRatio = ratioWidth / ratioHeight;
  const inlineItemHeight = inlineItemWidth / aspectRatio;
  const inlineContentHeight = inlineItemHeight + spacing(2) + 70; // <<<<<<<<<<<<<<<< TODO!!!!!!!!!!!!!!

  console.log("SDKFJSDKFJDSFJDSF:SDFJDLK", ratio, aspectRatio, caption);

  // const adHeaderHeight = spacing(4);
  // const adHorizontalSpacing = 21;
  // const adMarginBottom = spacing(2);
  // const adContainerHeight = height + adHeaderHeight;
  // const adContainerHeightPlusMargin = adContainerHeight + adMarginBottom;
  // const adContainerWidth = width + adHorizontalSpacing;
  // const contentWidth = tabletWidth - adContainerWidth;

  // const contentHeight = adContainerHeightPlusMargin;

  const paragraphs = inlineContent
    .filter((c) => c.name === "paragraph")
    .map(assignWithId(inlineContentWidth));

  const contentParameters = {
    contentWidth: inlineContentWidth,
    contentHeight: inlineContentHeight,
    contentLineHeight: lineHeight,
  };

  return (
    <MeasureInlineContent
      content={paragraphs}
      contentParameters={contentParameters}
      skeletonProps={skeletonProps}
      renderMeasuredContents={(contentMeasurements) => {
        const { chunks, currentInlineContentHeight } = chunkInlineContent(
          paragraphs,
          contentMeasurements,
          contentParameters,
        );

        const requiredInlineContentHeight = Math.max(
          currentInlineContentHeight,
          inlineContentHeight,
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
                  { width: inlineItemWidth, height: inlineContentHeight },
                ]}
              >
                <ArticleImage {...articleImageProps} />
                {/* {Component} */}
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
