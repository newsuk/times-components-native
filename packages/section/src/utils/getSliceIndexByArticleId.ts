export const getSliceIndexByArticleId = (articleId: string, data: any[]) => {
  if (!data) return 0;
  const sliceIndex = data.findIndex((slice: any) => {
    if (!slice.items) return false;
    return !slice.items.every((item: any) => {
      if (articleId === item.articleId) return false;
      return true;
    });
  });
  return sliceIndex !== -1 ? sliceIndex : 0;
};
