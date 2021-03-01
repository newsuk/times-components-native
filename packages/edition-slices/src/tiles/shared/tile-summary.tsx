import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import ArticleSummary from "./article-summary";
import {
  BylineInput,
  Markup,
  Tile,
} from "@times-components-native/fixture-generator/src/types";
import { ResponsiveContext } from "@times-components-native/responsive";

interface Props {
  bylines?: BylineInput[];
  bylineStyle?: StyleProp<ViewStyle>;
  bylineOnTop?: boolean;
  flagColour?: any;
  flagsStyle?: StyleProp<ViewStyle>;
  headlineStyle?: StyleProp<TextStyle>;
  labelColour?: string;
  linesOfTeaserToRender?: number;
  strapline?: string;
  straplineStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  summary?: Markup;
  summaryStyle?: any;
  tile: Tile;
  withStar?: boolean;
  underneathTextStar?: boolean;
  centeredStar?: boolean;
  isDarkStar?: boolean;
  starStyle?: StyleProp<ViewStyle>;
  hideLabel?: boolean;
  whiteSpaceHeight?: number;
}

const TileSummary: React.FC<Props> = ({
  bylines,
  bylineStyle,
  bylineOnTop = false,
  flagColour = {},
  flagsStyle,
  headlineStyle,
  labelColour,
  linesOfTeaserToRender,
  strapline,
  straplineStyle,
  style,
  summary,
  summaryStyle,
  tile,
  withStar = true,
  whiteSpaceHeight,
  underneathTextStar = false,
  centeredStar = false,
  isDarkStar = false,
  starStyle,
  hideLabel = false,
}) => {
  return (
    <ResponsiveContext.Consumer>
      {({ isTablet }) => (
        <ArticleSummary
          isTablet={isTablet}
          bylines={bylines}
          bylineStyle={bylineStyle}
          bylineOnTop={bylineOnTop}
          flagColour={flagColour}
          flagsStyle={flagsStyle}
          headlineStyle={headlineStyle}
          labelColour={labelColour}
          linesOfTeaserToRender={linesOfTeaserToRender}
          strapline={strapline}
          straplineStyle={straplineStyle}
          style={style}
          summary={summary}
          summaryStyle={summaryStyle}
          tile={tile}
          withStar={withStar}
          whiteSpaceHeight={whiteSpaceHeight}
          underneathTextStar={underneathTextStar}
          centeredStar={centeredStar}
          isDarkStar={isDarkStar}
          starStyle={starStyle}
          hideLabel={hideLabel}
        />
      )}
    </ResponsiveContext.Consumer>
  );
};

export default TileSummary;
