import memoize from "memoize-one";

import { setupAd } from "./setupAd";
import { setupDropCap } from "./setupDropCap";
import { setupInlineContent } from "./setupInlineContent";
import { isTemplateWithLeadAssetInGallery } from "@times-components-native/utils";

export { getStringBounds } from "./getStringBounds";

const addIndexToImages = (skeletonProps) => {
  let index = 0;

  if (!skeletonProps?.data) {
    return skeletonProps;
  }

  if (isTemplateWithLeadAssetInGallery(skeletonProps.data.template)) {
    // the lead asset image will assume index 0
    index = 1;
  }

  const content = skeletonProps.data.content.map((node) => {
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
      content,
    },
  };
};

export default memoize((skeletonProps) => {
  const prop = addIndexToImages(skeletonProps);
  return setupInlineContent(prop, setupDropCap(prop, setupAd(prop)));
});
