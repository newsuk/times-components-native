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
  export const fontFactory;
  export const globalSpacingStyles;
  export const fonts;
  export default styleguide;
}

declare module "@times-components-native/utils" {
  import { Crop } from "@times-components-native/fixture-generator/src/types";
  import { TimesImage } from "@times-components-native/types";
  import { string } from "prop-types";

  type appendToImageURL = (
    url: string,
    key: string,
    value: string | number,
  ) => string;

  type Color =
    | string
    | {
        alpha: number;
        blue: number;
        green: number;
        red: number;
      };
  type gqlRgbaToHex = (color: Color) => string;
  type getDimensions = () => any;
  type getCropByPriority = (leadAsset: TimesImage) => Crop;
  type addDimensionsListener = (string, any) => any;
  type removeDimensionsListener = (string, any) => any;
  type calculateContentWidth = (number, string) => number;
  type clean = <T>(obj: Dictionary<T>) => Dictionary<T>;
  type getHeadline = (headline?: string, shortHeadline?: string) => string;

  export const clean: clean;
  export const appendToImageURL: appendToImageURL;
  export const getDimensions: getDimensions;
  export const calculateContentWidth: calculateContentWidth;
  export const addDimensionsListener: addDimensionsListener;
  export const removeDimensionsListener: removeDimensionsListener;
  export const getCropByPriority: getCropByPriority;
  export const gqlRgbaToHex: gqlRgbaToHex;
  export const getHeadline: getHeadline;
}

declare module "react-native-hooks" {
  export const useLayout: () => {
    onLayout: () => void;
    width?: number;
    height?: number;
  };
}
