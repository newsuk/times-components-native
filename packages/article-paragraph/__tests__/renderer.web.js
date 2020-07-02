import React from "react";
import { ContextProviderWithDefaults } from "@times-components-native/context";
import { scales, themeFactory } from "@times-components-native/styleguide";
import coreRenderers from "@times-components-native/markup";
import { renderTree } from "@times-components-native/markup-forest";
import ArticleParagraph from "../src";
import DropCapView from "../src/drop-cap";

export default (ast, section = "default") => {
  const theme = themeFactory(section, "magazinestandard");
  return (
    <ContextProviderWithDefaults
      value={{
        theme: {
          ...themeFactory(section, "mainstandard"),
          scale: scales.medium
        }
      }}
    >
      {renderTree(ast, {
        ...coreRenderers,
        dropCap(key, { value }) {
          return (
            <DropCapView font={theme.dropCapFont} key={key}>
              {value}
            </DropCapView>
          );
        },
        paragraph(key, attributes, children, indx, node) {
          return (
            <ArticleParagraph ast={node} key={indx} uid={indx}>
              {children}
            </ArticleParagraph>
          );
        }
      })}
    </ContextProviderWithDefaults>
  );
};
