// eslint-disable import/first
import TestRenderer from "react-test-renderer";
import paragraphData from "./fixtures/paragraph-showcase.json";
import emptyParagraphData from "./fixtures/empty-paragraph.json";
import dropCapData from "./fixtures/drop-cap-showcase.json";
import dropCapShortTextData from "./fixtures/drop-cap-short-text-showcase.json";
import renderParagraph from "./renderer";
import { withMobileContext } from "@times-components-native/test-utils";

const renderComponent = (component) =>
  TestRenderer.create(withMobileContext(component));

export default () => [
  {
    name: "paragraph",
    test: async () => {
      const testInstance = renderComponent(renderParagraph(paragraphData));
      expect(testInstance).toMatchSnapshot();
    },
  },
  {
    name: "empty paragraph",
    test: async () => {
      const testInstance = renderComponent(renderParagraph(emptyParagraphData));
      expect(testInstance).toMatchSnapshot();
    },
  },
  {
    name: "paragraph with a drop cap",
    test: async () => {
      const testInstance = renderComponent(renderParagraph(dropCapData));
      expect(testInstance).toMatchSnapshot();
    },
  },
  {
    name: "paragraph with a short text and a drop cap",
    test: async () => {
      const testInstance = renderComponent(
        renderParagraph(dropCapShortTextData),
      );
      expect(testInstance).toMatchSnapshot();
    },
  },
];
