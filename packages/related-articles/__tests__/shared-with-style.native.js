import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import { mockNativeModules } from "@tcn/mocks";

mockNativeModules();

jest.mock("@tcn/card", () => "Card");
jest.mock("@tcn/link", () => "Link");
jest.mock("@tcn/article-label", () => "ArticleLabel");

addSerializers(
  expect,
  compose(
    print,
    minimalNativeTransform,
    flattenStyleTransform,
    minimaliseTransform((value, key) => key !== "style")
  )
);
