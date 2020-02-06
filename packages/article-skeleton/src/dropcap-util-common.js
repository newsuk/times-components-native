/* eslint-disable no-param-reassign */
import get from "lodash.get";

const templateWithDropCaps = [
  "indepth",
  "maincomment",
  "magazinestandard",
  "magazinecomment"
];

export const isQuote = char => /'|"|‘|“/.test(char);

const splitNode = node => {
  const { children } = node;
  if (children.length === 0) {
    return node;
  }
  if (children[0].name === "text") {
    const sliceIndex =
      isQuote(get(children[0], "attributes.value[0]")) &&
      children[0].attributes.value.length > 1
        ? 2
        : 1;

    return {
      ...node,
      attributes: {
        ...node.attributes
      },
      children: [
        {
          ...children[0],
          attributes: {
            ...children[0].attributes,
            value: children[0].attributes.value.slice(0, sliceIndex),
            dropCap: true
          }
        },
        {
          ...children[0],
          attributes: {
            ...children[0].attributes,
            value: children[0].attributes.value.slice(sliceIndex),
            dropCap: true
          }
        },
        ...children.slice(1)
      ]
    };
  }
  const firstChild = splitNode(children[0]);
  if (firstChild.attributes.dropCap && node.name !== "paragraph") {
    const result = {
      ...node,
      attributes: {
        ...node.attributes,
        dropCap: true
      },
      children: [firstChild, ...children.slice(1)]
    };
    firstChild.attributes.dropCap = true;
    return result;
  }
  const result = {
    ...node,
    children: [firstChild, ...children.slice(1)]
  };
  firstChild.attributes.dropCap = true;
  return result;
};

const findFirstTextNode = children => {
  const child = children[0];
  if (!child) {
    return children;
  }
  if (child.attributes.dropCap && child.name !== "text") {
    return findFirstTextNode(child.children);
  }
  return children;
};

const getChild = children => {
  if (children[0].name === "paragraph") {
    return children[0];
  }

  if (children.length > 1 && children[1].name === "paragraph") {
    return children[1];
  }

  return null;
};

const insertDropcapIntoAST = (children, template, isDropcapDisabled) => {
  try {
    if (
      template &&
      templateWithDropCaps.includes(template) &&
      !isDropcapDisabled &&
      children.length > 0
    ) {
      const child = getChild(children);

      if (!child || child.name !== "paragraph" || child.children.length === 0) {
        return children;
      }

      const withCap = splitNode(child);
      const withoutCap = splitNode(child);

      const newCapChildren = findFirstTextNode(withCap.children);
      newCapChildren.splice(1);

      const newChildren = findFirstTextNode(withoutCap.children);
      newChildren.splice(0, 1);

      return [
        {
          name: "dropCap",
          attributes: {},
          children: [withCap]
        },
        withoutCap,
        ...children.slice(1)
      ];
    }
  } catch (error) {
    return children;
  }
  return children;
};

export default insertDropcapIntoAST;
