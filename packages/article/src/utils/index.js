const appendToInlineImageUrl = (itemAttributes) => {
  let url = itemAttributes.url;
  url = `${url}${url.includes("?") ? "&" : "?"}`;
  url = `${url}rel_width=${itemAttributes.relativeWidth}`;
  url = `${url}&rel_height=${itemAttributes.relativeHeight}`;
  url = `${url}&rel_vertical_offset=${itemAttributes.relativeVerticalOffset}`;
  url = `${url}&rel_horizontal_offset=${itemAttributes.relativeHorizontalOffset}`;
  return url;
};

const getMediaList = (content, leadAsset) => {
  const ast = content || [];

  let index = 0;
  const mediaList = [];

  if (leadAsset) {
    index += 1;
    mediaList.push({
      index: 0,
      name: "leadAsset",
      value: {
        ...leadAsset,
        ...(leadAsset.crop169 && {
          crop169: {
            ...leadAsset.crop169,
            url: appendToInlineImageUrl(leadAsset.crop169),
          },
        }),
        ...(leadAsset.posterImage &&
          leadAsset.posterImage.crop169 && {
            posterImage: {
              ...leadAsset.posterImage,
              crop169: {
                ...leadAsset.posterImage.crop169,
                url: appendToInlineImageUrl(leadAsset.posterImage.crop169),
              },
            },
          }),
      },
    });
  }

  const inlineMediaList = ast.filter(
    (item) => item.name === "image" || item.name === "video",
  );

  inlineMediaList.forEach((item) => {
    let inlineMedia;

    if (item.name === "video") {
      const { caption, posterImageUrl } = item.attributes;
      inlineMedia = {
        index,
        name: "inlineVideo",
        value: {
          caption,
          posterImageUrl,
        },
      };
    } else {
      inlineMedia = {
        index,
        name: "inlineImage",
        value: {
          ...item.attributes,
          url: appendToInlineImageUrl(item.attributes),
        },
      };
    }
    index += 1;
    mediaList.push(inlineMedia);
  });

  return mediaList;
};

const addIndexesToInlineImages = (content, leadAsset) => {
  const mutatedContent = content || [];
  let index = leadAsset ? 1 : 0;

  mutatedContent.forEach((item) => {
    const contentItem = item;
    if (contentItem.name === "image" || contentItem.name === "video") {
      contentItem.attributes.imageIndex = index;
      index += 1;
    }
  });

  return mutatedContent;
};

export { addIndexesToInlineImages, getMediaList };
