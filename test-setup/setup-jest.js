/* eslint-disable */

import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

if (typeof window !== "undefined")
  window.HTMLCanvasElement.prototype.getContext = () => null;

jest.mock("react-native-device-info", () => {
  return {
    getApplicationName: jest.fn(),
    getBuildNumber: jest.fn(),
    getBundleId: jest.fn(),
    getDeviceId: jest.fn(),
    getReadableVersion: jest.fn(),
    getVersion: jest.fn(),
  };
});

jest.mock("@react-native-community/netinfo", () => {
  return {
    fetch: () => Promise.resolve({ isConnected: true }),
    subscribe: () => () => null,
  };
});

jest.mock("react-native-image-zoom-viewer", () => "ImageZoomView");

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");
