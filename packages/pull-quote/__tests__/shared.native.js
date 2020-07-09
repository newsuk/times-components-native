import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalNativeTransform,
  print
} from "@tcn/jest-serializer";
import shared from "./shared.base";

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
      minimaliseTransform((value, key) => key === "style")
    )
  );

  shared(TestRenderer.create);
};
