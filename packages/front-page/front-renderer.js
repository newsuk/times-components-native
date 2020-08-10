import React from "react";
import coreRenderers from "@times-components-native/markup";
import { Text } from "react-native";

export const PARAGRAPH_INDENT = `\u3000`; // approximates a tab

export default {
  ...coreRenderers,
  link(key, attributes, renderedChildren) {
    return <Text key={key}>{renderedChildren}</Text>;
  },
  paragraph(key, attributes, renderedChildren) {
    return (
      <Text key={key}>
        {attributes.tab && PARAGRAPH_INDENT}
        {renderedChildren}
        {`\n`}
      </Text>
    );
  },
};
