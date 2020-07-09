import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import { iterator } from "@tcn/test-utils";
import tests from "./themes-with-style.base";

jest.mock("@tcn/link", () => ({
  TextLink: "TextLink"
}));
jest.mock("@tcn/icons", () => ({
  IconTwitter: "IconTwitter"
}));

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      flattenStyleTransform
    )
  );

  iterator(tests);
};
