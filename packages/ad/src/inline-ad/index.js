import React, { useCallback } from "react";
import { View } from "react-native";

import { tabletWidth } from "@times-components-native/styleguide";
import { render } from "@times-components-native/markup-forest";
import {
  renderers,
  Gutter,
  ErrorBoundary,
} from "@times-components-native/article-skeleton";

import { chunkInlineContent } from "./utils/chunkInlineContent";
import { MeasureInlineContent } from "./measure/MeasureInlineContent";
import Ad from "../ad";
import styles from "./styles";

const assignWithId = (height: number) => (
  content: ParagraphContent,
  idx: number,
): ParagraphContent => {
  return {
    ...content,
    id: `${idx}-${height}`, //suffixing the height ensures that we re-measure the content if the orientation changes - and that we don't unnecessarily re-measure if orientation changes back
  };
};

export const InlineAd = (props) => {
  const {
    width: adWidth,
    height: adHeight,
    defaultFont,
    inlineContent,
    skeletonProps,
  } = props;

  const renderChild = render(
    renderers({
      dropcapsDisabled: true,
      ...skeletonProps,
    }),
  );
  // eslint-disable-next-line react/prop-types
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

  const renderItem = (inline) => (item, index) => {
    const toRender = Child({ item, index }, inline);
    // return narrowContent ? (
    //   <View style={styles.keylineWrapper}>{toRender}</View>
    // ) : (
    //   toRender
    // );
    return toRender;
  };

  // const renderInlineContent = inlineContent?.map(renderItem);

  const { lineHeight } = defaultFont;

  const adHeaderHeight = 20;
  const adHorizontalSpacing = 21;
  const adMarginBottom = 10;
  const adContainerHeight = adHeight + adHeaderHeight;
  const adContainerHeightPlusMargin = adContainerHeight + adMarginBottom;
  const adContainerWidth = adWidth + adHorizontalSpacing;
  const contentWidth = tabletWidth - adContainerWidth;

  const contentHeight = adContainerHeightPlusMargin;

  const paragraphs = inlineContent
    .filter((c) => c.name === "paragraph")
    .map(assignWithId(contentHeight));

  const contentParameters = {
    contentWidth,
    contentHeight,
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
          contentHeight,
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
                style={{
                  height: requiredInlineContentHeight,
                  width: contentWidth,
                }}
              >
                {chunkedInlineContent.map(renderItem(true))}
              </View>
              <View
                style={[
                  styles.inlineAdContainer,
                  { width: adContainerWidth, height: adContainerHeight },
                ]}
              >
                <Ad {...props} />
              </View>
            </View>
            {chunkedOverflowContent.map(renderItem(false))}
          </>
        );
      }}
    />
  );
};
