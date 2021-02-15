import { Crops } from "@times-components-native/types";

export const getCropByPriority = (crops: Crops) => {
  if (!crops) {
    return null;
  }
  const { crop169, crop32, crop1251, crop11, crop45, crop23 } = crops;
  return crop169 || crop32 || crop1251 || crop11 || crop45 || crop23;
};
