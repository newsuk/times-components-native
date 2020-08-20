declare module "*.png";

declare module "@times-components-native/styleguide" {
  type ColourMap = Record<string, string>;
  type Colours = Record<string, ColourMap>;

  export const colours: Colours;
  export const spacing: (number) => number;
  export const styleguide;
}

declare module "@times-components-native/utils" {
  type appendToImageURL = (
    url: string,
    key: string,
    value: string | number,
  ) => string;

  export const appendToImageURL: appendToImageURL;
}

declare module "react-native-hooks" {
  export const useLayout: () => {
    onLayout: () => void;
    width?: number;
    height?: number;
  };
}
