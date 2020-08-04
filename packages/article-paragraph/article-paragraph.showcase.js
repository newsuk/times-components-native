/* eslint-disable react/prop-types */
import React from "react";
import { ContextProviderWithDefaults } from "@times-components-native/context";
import coreRenderers from "@times-components-native/markup";
import { renderTree } from "@times-components-native/markup-forest";
import { sections } from "@times-components-native/storybook";
import { scales, themeFactory } from "@times-components-native/styleguide";
import paragraphData from "./fixtures/paragraph-showcase.json";
import dropCapData from "./fixtures/drop-cap-showcase.json";
import dropCapShortTextData from "./fixtures/drop-cap-short-text-showcase.json";
import ArticleParagraph from "./src";
import DropCapView from "./src/drop-cap";
import { Text } from "react-native";

const renderParagraphWithScale = ({ select, boolean }, ast) => {
  const scale = select("Scale", scales, scales.medium);
  const section = select("Section", sections, "The Times Magazine");
  const theme = themeFactory(section, "magazinestandard");
  const enableDropcap = boolean && boolean("Enable DropCap", true);

  return (
    <ContextProviderWithDefaults value={{ theme: { scale } }}>
      {renderTree(ast, {
        ...coreRenderers,
        dropCap(key, { value }) {
          return (
            enableDropcap && (
              <DropCapView
                {...{
                  colour: theme.sectionColour,
                  font: theme.dropCapFont,
                  key,
                  dropCap: value,
                  scale,
                }}
              />
            )
          );
        },
        paragraph(key, attributes, children, indx, node) {
          return (
            <ArticleParagraph
              ast={node}
              dropCapColour={theme.sectionColour}
              dropCapFont={theme.dropCapFont}
              key={indx}
              uid={indx}
            >
              <Text>{children}</Text>
            </ArticleParagraph>
          );
        },
      })}
    </ContextProviderWithDefaults>
  );
};

export default {
  children: [
    {
      component: ({ select }) =>
        renderParagraphWithScale({ select }, paragraphData),
      name: "Paragraph",
      platform: "native",
      type: "story",
    },
    {
      component: ({ select, boolean }) =>
        renderParagraphWithScale({ select, boolean }, dropCapData),
      name: "Paragraph with dropcap",
      platform: "native",
      type: "story",
    },
    {
      component: ({ select, boolean }) =>
        renderParagraphWithScale({ select, boolean }, dropCapShortTextData),
      name: "DropCap paragraph with short text",
      platform: "native",
      type: "story",
    },
  ],
  name: "Primitives/Article Paragraph|Dropcap",
};
