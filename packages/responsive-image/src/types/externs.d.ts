declare module '*.png';

declare module '@times-components-native/styleguide' {
  type ColourMap = Record<string, string>;
  type Colours = Record<string, ColourMap>;

  export const colours: Colours;
}

declare module '@times-components-native/utils' {
  type appendToImageURL = (url: string, key: string, value: string | number) => string;

  export const appendToImageURL: appendToImageURL;
}

declare module 'react-native-hooks' {
  export const useLayout: () => {
    onLayout: () => {};
    width?: number;
    height?: number;
  };
}
