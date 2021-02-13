export const getSliceIndexByArticleId = (articleId: string, slices: any[]) => {
  let currentIndex = 0;
  slices?.forEach((slice: any, index: number) => {
    slice.items?.forEach((item: any) => {
      if (articleId === item.articleId) {
        currentIndex = index;
      }
    });
  });
  return currentIndex;
};
