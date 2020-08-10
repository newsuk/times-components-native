import { indent } from "@times-components-native/front-page/indent";
import MockMarkup from "@times-components-native/fixture-generator/src/mock-markup";

describe("indent", () => {
  it("does not add indent to first paragraph", () => {
    const content = new MockMarkup().addParagraphs(10).get();

    const indentedContent = indent(content);

    expect(indentedContent[0].attributes.tab).toBeFalsy();
  });

  it("does add indents to subsequent paragraphs", () => {
    const content = new MockMarkup().addParagraphs(10).get();

    const indentedContent = indent(content);

    expect(indentedContent[1].attributes.tab).toBeTruthy();
  });

  it("does not add indent to non-paragraphs", () => {
    const content = new MockMarkup().addAds(2).get();

    const indentedContent = indent(content);
    expect(indentedContent[0].attributes.tab).toBeFalsy();
    expect(indentedContent[1].attributes.tab).toBeFalsy();
  });
});
