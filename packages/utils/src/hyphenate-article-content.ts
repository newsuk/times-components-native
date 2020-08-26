import { Markup } from "@times-components-native/fixture-generator/src/types";
// @ts-ignore
import Hypher from "hypher";
// @ts-ignore
import english from "hyphenation.en-us";
const h = new Hypher(english);

const hyphenateChildren = (children: any) => {
  return children.map((child: any) => {
    switch (child.name) {
      case "text":
        return {
          ...child,
          attributes: {
            value: h.hyphenateText(child.attributes.value),
          },
        };
      default:
        return { ...child, children: hyphenateChildren(child.children) };
    }
  });
};

const hyphenateContentItem = (contentItem: Markup) => {
  return { ...contentItem, children: hyphenateChildren(contentItem.children) };
};

export const hyphenateArticleContent = (content: Markup[]) => {
  return content.map((contentItem) => {
    if (contentItem.name === "paragraph") {
      return hyphenateContentItem(contentItem);
    } else {
      return contentItem;
    }
  });
};
