import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import coreRenderers from "@times-components-native/markup";

type Renderer = (
  key: string,
  attributes: { value: string; tab?: boolean },
  renderedChildren?: React.Component,
) => React.ComponentElement<any, any> | string;

interface Input {
  onParagraphTextLayout?: (event: any) => void;
  leftAligned?: boolean;
  renderOptions?: TextStyle;
  addNewLine?: boolean;
}
type GetRenderers = (input: Input) => { [key: string]: Renderer };
export const PARAGRAPH_INDENT_CHAR = `\u3000`; // approximates a 2-space tab
const textBreakStrategy = "simple"; // there are several issues using other text break strategies on Android. When "highQuality"/"balanced" are used, we observed that onTextLayout was showing incorrect line breaks. Furthermore, random line breaks also appeared underneath some paragraphs.

export const getRenderers: GetRenderers = ({
  renderOptions,
  onParagraphTextLayout,
  addNewLine,
}) => ({
  ...coreRenderers,
  paragraph(key, attributes, renderedChildren) {
    return (
      <Text
        key={key}
        style={[!!renderOptions && renderOptions]}
        // @ts-ignore onTextLayout does exist on Text component
        onTextLayout={onParagraphTextLayout}
        textBreakStrategy={textBreakStrategy}
      >
        {attributes?.tab && PARAGRAPH_INDENT_CHAR}
        {renderedChildren}
        {addNewLine && `\n`}
      </Text>
    );
  },
  invisible(key, attributes) {
    return (
      <Text key={key} style={styles.invisible}>
        {attributes.value}
      </Text>
    );
  },
  link(key, _attributes, renderedChildren) {
    return <Text key={key}>{renderedChildren}</Text>;
  },
});

const styles = StyleSheet.create({
  invisible: {
    color: "rgba(1,0,0,0)",
  },
});
