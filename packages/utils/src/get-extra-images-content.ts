type Article = {
  content: {
    name: string;
    attributes: {
      caption: string;
      credits: string;
      display: string;
      ratio: string;
      relativeHeight: number;
      relativeHorizontalOffset: number;
      relativeVerticalOffset: number;
      relativeWidth: number;
      url: string;
    };
  }[];
};

export const getExtraImagesContent = (article: Article) => {
  if (!article || !article.content) {
    return [];
  }

  return article.content.filter((c) => c.name === "image");
};
