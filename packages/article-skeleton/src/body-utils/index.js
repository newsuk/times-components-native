import memoize from "memoize-one";

import { setupAd } from "./setupAd";
import { setupDropCap } from "./setupDropCap";
import { setupInlineContent } from "./setupInlineContent";
import { isTemplateWithLeadAssetInGallery } from "@times-components-native/utils";

export { getStringBounds } from "./getStringBounds";

const addIndexToImages = (skeletonProps) => {
  if (!skeletonProps?.data) {
    return skeletonProps;
  }

  const { template, leadAsset, content } = skeletonProps.data;

  let index = isTemplateWithLeadAssetInGallery(template, leadAsset) ? 1 : 0;
  const contentWithImageIndex = content.map((node) => {
    if (node.name !== "image" || node.attributes?.imageIndex) {
      return node;
    }

    const updatedNode = {
      ...node,
      attributes: {
        ...node.attributes,
        imageIndex: index,
      },
    };
    index++;

    return updatedNode;
  });

  return {
    ...skeletonProps,
    data: {
      ...skeletonProps.data,
      content: contentWithImageIndex,
    },
  };
};

export default memoize((skeletonProps) => {
  const props = addIndexToImages(skeletonProps);
  return setupInlineContent(props, setupDropCap(props, setupAd(props)));
});
