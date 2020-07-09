import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared-with-style.base";

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

  shared(TestRenderer.create);
};
