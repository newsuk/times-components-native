import React from "react";
import { View } from "react-native";
import { ModalImage } from "@times-components-native/image";
import ArticleLeadAssetVideo from "./article-lead-asset-video";
import {
  nativeDefaultProps,
  nativePropTypes,
} from "./article-lead-asset-prop-types";
import getRatio from "./get-ratio";

const ArticleLeadAssetModalImage = ({
  aspectRatio,
  caption,
  crop,
  onImagePress,
  uri,
  relativeWidth,
  relativeHeight,
  relativeHorizontalOffset,
  relativeVerticalOffset,
  extraContent,
}) => (
  <ModalImage
    testId={"lead-image"}
    {...{
      aspectRatio,
      caption,
      crop,
      onImagePress,
      uri,
      relativeWidth,
      relativeHeight,
      relativeHorizontalOffset,
      relativeVerticalOffset,
      images: extraContent,
    }}
    index={0}
  />
);

const ArticleLeadAsset = ({
  getImageCrop,
  renderCaption,
  isVideo,
  leadAsset,
  onImagePress,
  onVideoPress,
  width,
  style,
  extraContent,
}) => {
  if (!leadAsset) {
    return null;
  }

  const imageContainer = isVideo ? leadAsset.posterImage : leadAsset;
  const crop = getImageCrop(imageContainer);

  if (!crop) {
    return null;
  }
  const LeadAsset = isVideo
    ? ArticleLeadAssetVideo
    : ArticleLeadAssetModalImage;

  const caption = {
    credits: imageContainer.credits,
    text: imageContainer.caption,
  };

  return (
    <View style={style}>
      <LeadAsset
        aspectRatio={getRatio(crop.ratio)}
        caption={caption}
        leadAsset={leadAsset}
        relativeWidth={crop.relativeWidth}
        relativeHeight={crop.relativeHeight}
        relativeHorizontalOffset={crop.relativeHorizontalOffset}
        relativeVerticalOffset={crop.relativeVerticalOffset}
        onImagePress={onImagePress}
        onVideoPress={onVideoPress}
        uri={crop.url}
        width={width}
        extraContent={extraContent}
      />
      {renderCaption({ caption })}
    </View>
  );
};

ArticleLeadAsset.propTypes = nativePropTypes;
ArticleLeadAsset.defaultProps = nativeDefaultProps;

export default ArticleLeadAsset;
