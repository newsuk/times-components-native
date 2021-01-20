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

export const setupDropCap = (skeletonProps, content) => {
  const { data, dropCapFont, scale } = skeletonProps;
  const dropcapsDisabled = isDropcapsDisabled(data);

  if (dropcapsDisabled) return content;

  const firstParagraph = content.slice(0, 1)[0];

  if (firstParagraph.name !== "paragraph") return content;

  const firstParagraphFirstChild = firstParagraph.children?.[0];
  const firstParagraphRestOfChildren = firstParagraph.children?.slice(1);

  const firstParagraphFirstChildText =
    firstParagraphFirstChild?.attributes?.value;

  if (
    firstParagraphFirstChild?.name !== "text" ||
    !firstParagraphFirstChildText
  )
    return content;

  const dropCapLength = /^["“‘']/.test(firstParagraphFirstChildText) ? 2 : 1;
  const dropCapText = firstParagraphFirstChildText.slice(0, dropCapLength);

  const truncatedParagraphStartIndex =
    firstParagraphFirstChildText.charAt(dropCapLength) === " "
      ? dropCapLength + 1
      : dropCapLength;

  const modifiedFirstParagraph = [
    {
      ...firstParagraph,
      children: [
        {
          ...firstParagraphFirstChild,
          attributes: {
            ...firstParagraphFirstChild.attributes,
            value: firstParagraphFirstChildText.slice(
              truncatedParagraphStartIndex,
            ),
          },
        },
        ...firstParagraphRestOfChildren,
      ],
    },
  ];

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
        dropCapFont: dropCapFont || "dropCap",
        dropCapFontSize: fontSize,
        dropCapText,
        height,
        inlineContent: modifiedFirstParagraph,
        originalName: "dropcap",
        skeletonProps,
        width,
      },
      children: [],
    },
    ...restOfContent,
  ];
};
