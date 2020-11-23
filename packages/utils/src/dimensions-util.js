import {
  Dimensions,
  NativeEventEmitter,
  NativeModules,
  Platform,
} from "react-native";

let eventEmitter;

if (Platform.OS === "android") {
  eventEmitter = new NativeEventEmitter(NativeModules.ReactNativeEvent);
}

export const getDimensions = (
  width = Dimensions.get("window").width,
  height = Dimensions.get("window").height,
  fontScale = Dimensions.get("window").fontScale,
) => ({ width, height, fontScale });

export const addDimensionsListener = (type, handler) => {
  if (Platform.OS === "android") {
    const wrappedHandler = (data) => {
      return handler({
        window: {
          width: data.displayWidth,
          height: data.displayHeight,
          fontScale: data.fontScale,
        },
      });
    };
    eventEmitter.addListener("configurationChanged", wrappedHandler);
    return wrappedHandler;
  } else {
    Dimensions.addEventListener(type, handler);
    return handler;
  }
};

export const removeDimensionsListener = (type, handler) => {
  if (Platform.OS === "android") {
    eventEmitter.removeListener("configurationChanged", handler);
  } else {
    Dimensions.removeEventListener(type, handler);
  }
};
