import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import { mockNativeModules } from "@tcn/mocks";

mockNativeModules();
jest.mock("@tcn/card", () => "Card");
jest.mock("@tcn/link", () => "Link");

addSerializers(
  expect,
  compose(
    print,
    minimalNativeTransform,
    minimaliseTransform(
      (value, key) =>
        key === "style" ||
        key.toLowerCase().includes("class") ||
        key === "testID"
    )
  )
);
