import { pipe } from "@times-components-native/utils/src/pipe";
import { buildSliceData } from "./buildSliceData";
import { insertSectionAd } from "./insertSectionAd";
import { consecutiveItemsFlagger } from "./consecutiveItemsFlagger";

export const prepareSlicesForRender = (
  isTablet: boolean,
  sectionTitle: string,
  orientation: string,
) =>
  pipe(
    buildSliceData(isTablet, sectionTitle),
    consecutiveItemsFlagger(orientation),
    insertSectionAd(isTablet),
  );
