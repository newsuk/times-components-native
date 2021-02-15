import { TemplateType } from "@times-components-native/fixture-generator/src/types";

export const isTemplateWithLeadAssetInGallery = (
  template: TemplateType,
  leadAsset?: { __typename?: "Image" | "Video" },
) =>
  leadAsset?.__typename === "Image" &&
  [
    TemplateType.Mainstandard,
    TemplateType.Indepth,
    TemplateType.Magazinestandard,
  ].includes(template);
