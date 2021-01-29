import styleguide, {
  colours,
  fonts,
} from "@times-components-native/styleguide";
import { FontStorage } from "@times-components-native/typeset";
import { Dimensions } from "react-native";

import { getStringBounds } from "./getStringBounds";

const templateWithDropCaps = [
  "indepth",
  "maincomment",
  "magazinestandard",
  "magazinecomment",
];

const isDropcapsDisabled = ({ template, dropcapsDisabled }) => {
  if (dropcapsDisabled) return true;

  return !templateWithDropCaps.includes(template);
};

const extractDropCapText = (node) => {
  const { children } = node;

  if (!children?.length) return;

  const firstChild = children[0];
  const restOfChildren = node.children?.slice(1);

  if (firstChild.name === "text") {
    const firstChildText = firstChild?.attributes?.value;

    if (!firstChildText || !firstChildText.length) return;

    const dropCapLength = /^["“‘']/.test(firstChildText) ? 2 : 1;
    const dropCapText = firstChildText.slice(0, dropCapLength);

    const truncatedTextStartIndex =
      firstChildText.charAt(dropCapLength) === " "
        ? dropCapLength + 1
        : dropCapLength;

    const modifiedNode = {
      ...node,
      children: [
        {
          ...firstChild,
          attributes: {
            ...firstChild.attributes,
            value: firstChildText.slice(truncatedTextStartIndex),
          },
        },
        ...restOfChildren,
      ],
    };

    return [dropCapText, modifiedNode];
  }

  const dropCapParts = extractDropCapText(firstChild);

  if (!dropCapParts) return;

  const [dropCapText, modifiedFirstChild] = dropCapParts;

  return [
    dropCapText,
    {
      ...node,
      children: [modifiedFirstChild, ...restOfChildren],
    },
  ];
};

export const setupDropCap = (skeletonProps, content) => {
  const { data, dropCapFont = "dropCap", scale } = skeletonProps;

  if (isDropcapsDisabled(data)) return content;

  const firstParagraph = content[0];

  if (!firstParagraph?.name || firstParagraph.name !== "paragraph")
    return content;

  const dropCapParts = extractDropCapText(firstParagraph);

  if (!dropCapParts) return content;

  const [dropCapText, modifiedFirstParagraph] = dropCapParts;
  const restOfContent = content.slice(1);

  const { fontFactory } = styleguide({ scale });
  const defaultFont = {
    ...fontFactory({
      font: "body",
      fontSize: "bodyMobile",
    }),
    color: colours.functional.black,
  };
  const { fontScale } = Dimensions.get("window");
  defaultFont.fontSize *= fontScale;
  defaultFont.lineHeight *= fontScale;

  const fontSize = defaultFont.fontSize * 6;
  const fontSettings = {
    fontFamily: fonts[dropCapFont],
    fontStyle: "",
    fontWeight: "",
    fontSize,
    color: colours.section[data.section],
  };
  const font = FontStorage.getFont(fontSettings);
  const { height } = getStringBounds(fontSettings, dropCapText);
  const width = font.getAdvanceWidth(dropCapText, fontSettings.fontSize);

  return [
    {
      name: "inlineContent",
      attributes: {
        dropCapColor: colours.section[data.section],
        dropCapFont: dropCapFont,
        dropCapFontSize: fontSize,
        dropCapText,
        height,
        inlineContent: [modifiedFirstParagraph],
        originalName: "dropcap",
        skeletonProps,
        width,
      },
      children: [],
    },
    ...restOfContent,
  ];
};
