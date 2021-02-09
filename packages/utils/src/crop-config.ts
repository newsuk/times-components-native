// MOVE THIS BACK INTO THE TEMPLATE FILE AS ITS SPECIFIC TO IT
import {
  TimesImage,
  Video,
} from "@times-components-native/fixture-generator/src/types";

export default (crops: TimesImage | Video["posterImage"]) => {
  if (!crops) {
    return null;
  }
  const { crop169, crop32, crop1251, crop11, crop45, crop23 } = crops;
  return crop169 || crop32 || crop1251 || crop11 || crop45 || crop23;
};
