import { pipe } from "@times-components-native/utils/src/pipe";
import { addSliceConfig } from "./addSliceConfig";
import { buildSliceData } from "./buildSliceData";
import { insertSectionAd } from "./insertSectionAd";
import { consecutiveItemsFlagger } from "./consecutiveItemsFlagger";

export const prepareSlicesForRender = (
  isTablet: boolean,
  sectionTitle: string,
) =>
  pipe(
    buildSliceData,
    consecutiveItemsFlagger,
    insertSectionAd(isTablet),
    addSliceConfig(isTablet, sectionTitle),
  );
