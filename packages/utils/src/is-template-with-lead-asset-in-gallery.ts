import { TemplateType } from "@times-components-native/fixture-generator/src/types";

export const isTemplateWithLeadAssetInGallery = (template: TemplateType) =>
  [
    TemplateType.Mainstandard,
    TemplateType.Indepth,
    TemplateType.Magazinestandard,
  ].includes(template);
