import { getCropByPriority } from "./get-crop-by-priority";

export const defaultAsset = {
  aspectRatio: "1:1",
  displayImage: null,
  isVideo: false,
  leadAsset: null,
};

const getDisplayImage = (leadAsset, isVideo) => {
  if (isVideo && leadAsset.posterImage) {
    return getCropByPriority(leadAsset.posterImage);
  }

  return getCropByPriority(leadAsset);
};

export default function getLeadAsset({ leadAsset }) {
  if (!leadAsset) return defaultAsset;

  const isVideo = leadAsset.__typename === "Video";
  const displayImage = getDisplayImage(leadAsset, isVideo);
  if (!displayImage) return defaultAsset;

  const aspectRatio = displayImage.ratio;

  return {
    aspectRatio,
    displayImage,
    isVideo,
    leadAsset: { ...leadAsset, isVideo },
  };
}
