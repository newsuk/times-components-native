import TestRenderer from "react-test-renderer";
import renderParagraph from "./renderer";
import dropCapData from "./fixtures/drop-cap-showcase.json";
import { withMobileContext } from "@times-components-native/test-utils";

const renderComponent = (component) =>
  TestRenderer.create(withMobileContext(component));

export default [
  {
    name: "paragraph with a drop cap in culture magazine",
    test: async () => {
      const testInstance = renderComponent(
        renderParagraph(dropCapData, "culture"),
      );
      expect(testInstance).toMatchSnapshot();
    },
  },
  {
    name: "paragraph with a drop cap in style magazine",
    test: async () => {
      const testInstance = renderComponent(
        renderParagraph(dropCapData, "style"),
      );
      expect(testInstance).toMatchSnapshot();
    },
  },
  {
    name: "paragraph with a drop cap in the sunday times magazine",
    test: async () => {
      const testInstance = renderComponent(
        renderParagraph(dropCapData, "thesundaytimesmagazine"),
      );
      expect(testInstance).toMatchSnapshot();
    },
  },
];
