import { Template } from "@times-components-native/article-skeleton/types";

export const isTemplateWithLeadAssetInGallery = (template: Template) =>
  template === Template.MAIN_STANDARD ||
  template === Template.IN_DEPTH ||
  template === Template.MAGAZINE_STANDARD;
