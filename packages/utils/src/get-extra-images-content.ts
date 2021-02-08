import {
  Article,
  Media,
} from "@times-components-native/fixture-generator/src/types";
import getStandardTemplateCrop from "./crop-config";

const getCrop = (leadAsset?: Media) => {
  if (!leadAsset) {
    return null;
  }

  let crop = null;

  if (leadAsset.__typename === "Video" && leadAsset.posterImage) {
    crop = getStandardTemplateCrop(leadAsset.posterImage);
  }

  if (leadAsset.__typename === "Image") {
    crop = getStandardTemplateCrop(leadAsset);
  }

  return crop;
};

export const getExtraImagesContent = (article: Article) => {
  if (!article || !article.content || !article.leadAsset) {
    return [];
  }

  const leadAsset = article.leadAsset;

  const crop = getCrop(leadAsset);

  if (!crop) {
    return [];
  }

  return [
    {
      attributes: {
        display: "",
        caption: leadAsset.caption,
        credits: "credits" in leadAsset ? leadAsset.credits : "",
        url: crop.url,
        relativeHorizontalOffset: crop.relativeHorizontalOffset,
        relativeVerticalOffset: crop.relativeVerticalOffset,
        relativeWidth: crop.relativeWidth,
        relativeHeight: crop.relativeHeight,
        ratio: crop.ratio,
      },
    },
    ...article.content.filter((c: { name: string }) => c.name === "image"), // @TODO: Add proper types to content/Markup
  ];
};
