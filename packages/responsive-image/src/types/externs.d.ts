declare module "*.png";

declare module "@times-components-native/styleguide" {
  type ColourMap = Record<string, string>;
  type Colours = Record<string, ColourMap>;

  export const colours: Colours;
  export const spacing: (number) => number;
  export const styleguide;
  export const fontFactory;
}

declare module "@times-components-native/utils" {
  type appendToImageURL = (
    url: string,
    key: string,
    value: string | number,
  ) => string;

  type getDimensions = () => any;

  type calculateContentWidth = (number, string) => number;

  export const appendToImageURL: appendToImageURL;
  export const getDimensions: getDimensions;
  export const calculateContentWidth: calculateContentWidth;
}

declare module "react-native-hooks" {
  export const useLayout: () => {
    onLayout: () => void;
    width?: number;
    height?: number;
  };
}
