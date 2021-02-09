declare module "*.png";

interface Dictionary<T> {
  [index: string]: T;
}

declare module "@times-components-native/styleguide" {
  type ColourMap = Record<string, string>;
  type Colours = Record<string, ColourMap>;

  export const colours: Colours;
  export const fonts: Record<string, string>;
  export const spacing: (number) => number;
  export const editionBreakpoints: {
    huge: "huge";
    medium: "medium";
    small: "small";
    wide: "wide";
  };
  export const tabletWidth: number;
  export const getEditionBreakpoint = (number) => string;
  export const getNarrowArticleBreakpoint = (number) => string;
  export const styleguide;
  export const fontFactory;
  export const globalSpacingStyles;
  export const fonts;
}

declare module "@times-components-native/utils" {
  import {
    Crop,
    PosterImage,
    TimesImage,
  } from "@times-components-native/fixture-generator/src/types";

  type appendToImageURL = (
    url: string,
    key: string,
    value: string | number,
  ) => string;

  type getDimensions = () => any;
  type getStandardTemplateCrop = (leadAsset: TimesImage | PosterImage) => Crop;
  type addDimensionsListener = (string, any) => any;
  type removeDimensionsListener = (string, any) => any;
  type calculateContentWidth = (number, string) => number;
  type clean = <T>(obj: Dictionary<T>) => Dictionary<T>;

  export const clean: clean;
  export const appendToImageURL: appendToImageURL;
  export const getDimensions: getDimensions;
  export const calculateContentWidth: calculateContentWidth;
  export const addDimensionsListener: addDimensionsListener;
  export const removeDimensionsListener: removeDimensionsListener;
  export const getStandardTemplateCrop: getStandardTemplateCrop;
}

declare module "react-native-hooks" {
  export const useLayout: () => {
    onLayout: () => void;
    width?: number;
    height?: number;
  };
}
