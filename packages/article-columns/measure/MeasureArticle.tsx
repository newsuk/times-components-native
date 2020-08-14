import React, { useReducer } from "react";
import { ScrollView, StyleSheet, TextStyle, View } from "react-native";

import {
  ColumnParameters,
  Line,
  ArticleMeasurements,
} from "@times-components-native/article-columns/types";

import { MeasureByline, MeasureContent } from "./MeasureComponents";
import { MeasurementDispatch } from "./MeasurementDispatchContext";
import { initialState, reducer } from "./reducer";
import {
  Bylines,
  ParagraphContent,
} from "@times-components-native/article-columns/domain-types";

interface Props {
  articleContents: ParagraphContent[];
  bylines: Bylines;
  columnParameters: ColumnParameters;
  renderMeasuredContents: (articleMeasurements: ArticleMeasurements) => any;
  style: TextStyle;
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

export const InnerMeasureArticle: React.FC<
  Props & { measurementState: ArticleMeasurements }
> = ({
  articleContents,
  bylines,
  columnParameters,
  renderMeasuredContents,
  measurementState,
  style,
}) => {
  const {
    contents: { lines, heights },
  } = measurementState;
  if (
    allContentMeasured(articleContents, heights, lines) &&
    measurementState.bylineHeight !== null
  ) {
    return renderMeasuredContents(measurementState);
  }

  return (
    <ScrollView style={styles.renderOffscreen}>
      <MeasureByline columnParameters={columnParameters} bylines={bylines} />
      <View style={{ width: columnParameters.columnWidth }}>
        {articleContents.map((content) => (
          <MeasureContent
            key={`ContentMeasuringView:${content.id}`}
            style={style}
            content={content}
          />
        ))}
      </View>
    </ScrollView>
  );
};

/* istanbul ignore next */
export const MeasureArticle: React.FC<Props> = (props) => {
  const [measurementState, measurementDispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <MeasurementDispatch.Provider value={measurementDispatch}>
      <InnerMeasureArticle {...props} measurementState={measurementState} />
    </MeasurementDispatch.Provider>
  );
};

const styles = StyleSheet.create({
  renderOffscreen: {
    transform: [{ translateX: -1000 }],
  },
});
