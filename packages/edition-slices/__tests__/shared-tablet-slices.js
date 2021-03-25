import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import shared from "./shared-tablet-slices.base";

jest.mock("react-native-device-info", () => ({
  isTablet: () => true,
}));

export default () => {
  addSerializers(
    expect,
    enzymeRenderedSerializer(),
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform(
        (value, key) =>
          key === "style" ||
          key.includes("Class") ||
          key === "tile" ||
          key === "items",
      ),
    ),
  );

  shared();
};
