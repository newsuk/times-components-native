import React, { useCallback, FC } from "react";
import { View, Text } from "react-native";

import { ParagraphContent } from "@times-components-native/types";
import {
  colours,
  spacing,
  tabletWidth,
  getNarrowArticleBreakpoint,
} from "@times-components-native/styleguide";
import { render } from "@times-components-native/markup-forest";
import {
  renderers,
  Gutter,
  ErrorBoundary,
} from "@times-components-native/article-skeleton";
import { useResponsiveContext } from "@times-components-native/responsive";
import Context from "@times-components-native/context";
import ArticleImage from "@times-components-native/article-image";
import PullQuote from "@times-components-native/pull-quote";

import { chunkInlineContent } from "./utils/chunkInlineContent";
import { MeasureInlineContent } from "./measure/MeasureInlineContent";

import styles from "./styles";
import { ArticleImageProps, SkeletonProps } from "./types";

const assignWithId = (height: number) => (
  content: ParagraphContent,
  idx: number,
): ParagraphContent => {
  return {
    ...content,
    id: `${idx}-${height}`, //suffixing the height ensures that we re-measure the content if the orientation changes - and that we don't unnecessarily re-measure if orientation changes back
  };
};

export const renderItemComponent = (itemProps) => {
  const { children, originalName, width } = itemProps;
  if (originalName === "image") {
    return <ArticleImage {...itemProps} />;
  }
  if (originalName === "pullQuote") {
    const itemContent = children?.[0]?.string;
    return (
      <Context.Consumer>
        {({
          theme: { pullQuoteFont, sectionColour = colours.section.default },
        }) => (
          <View style={{ width }}>
            <PullQuote
              {...itemProps}
              font={pullQuoteFont}
              quoteColour={sectionColour}
            >
              {itemContent}
            </PullQuote>
          </View>
        )}
      </Context.Consumer>
    );
  }
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

const InlineContent: FC<Props> = (props) => {
  const {
    defaultFont,
    inlineContent,
    narrowContent,
    originalName,
    skeletonProps,
  } = props;

  const { windowWidth } = useResponsiveContext();

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

  const { lineHeight } = defaultFont;

  const availableWidth = Math.min(
    windowWidth,
    narrowContent
      ? getNarrowArticleBreakpoint(windowWidth).content
      : tabletWidth,
  );

  const inlineItemWidth = availableWidth * 0.35;
  const inlineContentWidth = availableWidth - inlineItemWidth;

  let itemProps: ArticleImageProps;

  console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", originalName);

  if (originalName === "image") {
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

    itemProps = {
      captionOptions: {
        caption,
        credits,
      },
      onImagePress,
      originalName,
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
  }

  // if (originalName === "pullQuote") {
  const {
    caption: { name, text, twitter },
    children,
    onTwitterLinkPress,
  } = props;

  itemProps = {
    caption: name,
    children,
    onTwitterLinkPress,
    originalName,
    text,
    twitter,
    width: inlineItemWidth,
  };
  // }

  // const [ratioWidth, ratioHeight] = ratio.split(":");
  // const aspectRatio = ratioWidth / ratioHeight;
  // const inlineItemHeight = inlineItemWidth / aspectRatio;
  // const inlineContentHeight = inlineItemHeight + spacing(2); // <<<<<<<<<<<<<<<< TODO!!!!!!!!!!!!!!

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
                {renderItemComponent(itemProps)}
                {/* <ItemComponent {...itemProps} /> */}
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
