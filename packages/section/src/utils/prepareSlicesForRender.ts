import { pipe } from "@times-components-native/utils/src/pipe";
import { buildSliceData } from "./buildSliceData";
import { insertSectionAd } from "./insertSectionAd";
import { consecutiveItemsFlagger } from "@times-components-native/section/src/utils/consecutiveItemsFlagger";

export const prepareSlicesForRender = (isTablet: boolean) =>
  pipe(buildSliceData, consecutiveItemsFlagger, insertSectionAd(isTablet));
