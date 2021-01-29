// eslint-disable import/first
import TestRenderer from "react-test-renderer";
import paragraphData from "./fixtures/paragraph-showcase.json";
import emptyParagraphData from "./fixtures/empty-paragraph.json";
import renderParagraph from "./renderer";
import { withMobileContext } from "@times-components-native/test-utils";

const renderComponent = (component) =>
  TestRenderer.create(withMobileContext(component));

export default () => {
  it("paragraph", () => {
    const testInstance = renderComponent(renderParagraph(paragraphData));
    expect(testInstance).toMatchSnapshot();
  });
  it("empty paragraph", () => {
    const testInstance = renderComponent(renderParagraph(emptyParagraphData));
    expect(testInstance).toMatchSnapshot();
  });
};
