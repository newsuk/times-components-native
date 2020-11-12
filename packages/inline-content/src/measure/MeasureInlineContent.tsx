import React, { useReducer } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Measurements, ParagraphContent } from "@times-components-native/types";
import { InlineMeasurementDispatch } from "./InlineMeasurementDispatchContext";
import { MeasureItem, MeasureContent } from "./MeasureInlineComponents";
import { initialState, reducer } from "./reducer";
import {
  ContentParameters,
  InlineItemProps,
  Line,
  SkeletonProps,
} from "../types";

interface Props {
  content: ParagraphContent[];
  contentParameters: ContentParameters;
  itemProps: InlineItemProps;
  renderMeasuredContents: (contentMeasurements: Measurements) => any;
  skeletonProps: SkeletonProps;
}

const allContentMeasured = (
  contentToMeasure: ParagraphContent[],
  heights: { [key: string]: number },
  lines: { [key: string]: Line[] },
) => {
  return (
    contentToMeasure.filter((c) => heights[c.id!] && lines[c.id!]).length ===
    contentToMeasure.length
  );
};

export const InnerMeasureInlineContent: React.FC<
  Props & { measurementState: Measurements }
> = ({
  content,
  contentParameters,
  itemProps,
  measurementState,
  renderMeasuredContents,
  skeletonProps,
}) => {
  const {
    contents: { lines, heights },
  } = measurementState;
  if (
    allContentMeasured(content, heights, lines) &&
    (!itemProps || measurementState.itemHeight !== null)
  ) {
    return renderMeasuredContents(measurementState);
  }

  return (
    <ScrollView style={styles.renderOffscreen}>
      {itemProps && (
        <MeasureItem
          itemProps={itemProps}
          width={contentParameters.itemWidth}
        />
      )}
      <View
        style={{
          width: contentParameters.contentWidth,
        }}
      >
        {content.map((contentItem) => (
          <MeasureContent
            key={`InlineContentMeasuringView:${contentItem.id}`}
            skeletonProps={skeletonProps}
            content={contentItem}
          />
        ))}
      </View>
    </ScrollView>
  );
};

/* istanbul ignore next */
export const MeasureInlineContent: React.FC<Props> = (props) => {
  const [measurementState, measurementDispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <InlineMeasurementDispatch.Provider value={measurementDispatch}>
      <InnerMeasureInlineContent
        {...props}
        measurementState={measurementState}
      />
    </InlineMeasurementDispatch.Provider>
  );
};

const styles = StyleSheet.create({
  renderOffscreen: {
    transform: [{ translateX: -1000 }],
  },
});
