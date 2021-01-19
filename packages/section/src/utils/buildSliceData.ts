import memoizeOne from "memoize-one";
import { transformSlice as transformSliceFunction } from "@times-components-native/section/src/utils/transformSlice";

const withIgnoredSeperator = (slice: any) => ({
  ...slice,
  ignoreSeparator: true,
});

const shouldIgnoreSeperator = ({ name }: { name: string }) =>
  name === "LeadersSlice" || name === "DailyUniversalRegister";

export const buildSliceData = memoizeOne(
  (isTablet: boolean, sectionTitle: string) => (data: any[]) => {
    const transformSlice = transformSliceFunction(isTablet, sectionTitle);

    return data.reduce((newSlices, oldSlice, idx) => {
      const nextSlice = data[idx + 1];

      if (nextSlice && shouldIgnoreSeperator(nextSlice)) {
        newSlices[idx] = withIgnoredSeperator(oldSlice);
        newSlices[idx + 1] = withIgnoredSeperator(nextSlice);
      } else if (!newSlices[idx]) {
        newSlices[idx] = oldSlice;
      }

      const currentSlice = transformSlice(newSlices[idx]);
      let generatedId = currentSlice.id;
      Object.keys(currentSlice).forEach((key) => {
        if (currentSlice[key].article) {
          generatedId += currentSlice[key].article.id;
        }
      });

      newSlices[idx] = {
        ...currentSlice,
        elementId: `${generatedId}.${idx}`,
      };

      return newSlices;
    }, []);
  },
);
