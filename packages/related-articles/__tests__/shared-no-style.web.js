import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalWebTransform,
  print
} from "@times-components-native/jest-serializer";
import { mockNativeModules } from "@times-components-native/mocks";

mockNativeModules();

jest.mock("@times-components-native/card", () => "Card");
jest.mock("@times-components-native/link", () => "Link");

addSerializers(
  expect,
  compose(
    print,
    minimalWebTransform,
    minimaliseTransform(
      (value, key) => key === "style" || key.toLowerCase().includes("class")
    )
  )
);
