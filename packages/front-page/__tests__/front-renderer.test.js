import ReactTestRenderer from "react-test-renderer";

import { getRenderers } from "../front-renderer";

const renderedChildren = "Some Text";

const renderers = getRenderers({ renderOptions: { fontSize: 14 } });
describe("front renderers", () => {
  describe("paragraph renderer", () => {
    it("renders paragraph", () => {
      const paragraphRenderer = renderers.paragraph(
        "some-key",
        { value: "some value" },
        renderedChildren,
      );
      const renderer = ReactTestRenderer.create(paragraphRenderer);

      expect(renderer.toJSON()).toMatchSnapshot();
    });

    it("renders paragraph with tab", () => {
      const paragraphRenderer = renderers.paragraph(
        "some-key",
        { value: "some value", tab: true },
        renderedChildren,
      );
      const renderer = ReactTestRenderer.create(paragraphRenderer);

      expect(renderer.toJSON()).toMatchSnapshot();
    });

    it("renders paragraph with new line at end", () => {
      const renderersWithNewLine = getRenderers({ addNewLine: true });

      const paragraphRenderer = renderersWithNewLine.paragraph(
        "some-key",
        { value: "some value", tab: true },
        renderedChildren,
      );
      const renderer = ReactTestRenderer.create(paragraphRenderer);

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("link text renderer", () => {
    it("renders link text", () => {
      const textRenderer = renderers.link("some-key", {}, renderedChildren);
      const renderer = ReactTestRenderer.create(textRenderer);

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });
});
