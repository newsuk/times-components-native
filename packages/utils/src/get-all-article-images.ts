import { Article } from "@times-components-native/fixture-generator/src/types";
import { getCropByPriority } from "./get-crop-by-priority";
import {
  MediaTypename,
  PosterImage,
  TimesImage,
} from "@times-components-native/types";

const getCrop = (
  leadAsset?:
    | {
        posterImage?: PosterImage;
        __typename: MediaTypename;
      }
    | TimesImage,
) => {
  if (!leadAsset) {
    return null;
  }

  let crop = null;

  if (leadAsset.__typename === "Video" && leadAsset.posterImage) {
    crop = getCropByPriority(leadAsset.posterImage);
  }

  if (leadAsset.__typename === "Image") {
    crop = getCropByPriority(leadAsset as TimesImage);
  }

  return crop;
};

export const getAllArticleImages = (article: {
  content: Article["content"];
  leadAsset:
    | TimesImage
    | {
        posterImage?: PosterImage;
        __typename: MediaTypename;
        caption?: string;
      };
}) => {
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
