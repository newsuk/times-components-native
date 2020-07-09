/* eslint-disable react/prop-types */
import React from "react";
import pick from "lodash.pick";
import { sections } from "@tcn/storybook";
import { ContextProviderWithDefaults } from "@tcn/context";
import Responsive from "@tcn/responsive";
import { colours, scales } from "@tcn/styleguide";
import KeyFacts from "./src/key-facts";

const selectScales = select => select("Scale", scales, scales.medium);
const selectSection = select =>
  select("Section", pick(colours.section, sections), colours.section.default);

const renderKeyFacts = ({ ast, select, hasScaling = false }) => {
  const scale = hasScaling ? selectScales(select) : null;
  const sectionColour = selectSection(select);
  return (
    <ContextProviderWithDefaults value={{ theme: { scale, sectionColour } }}>
      <Responsive>
        <KeyFacts ast={ast} onLinkPress={() => {}} />
      </Responsive>
    </ContextProviderWithDefaults>
  );
};

export default renderKeyFacts;
