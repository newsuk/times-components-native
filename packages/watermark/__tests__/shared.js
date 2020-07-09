import React from "react";
import { shallow } from "enzyme";
import {
  addSerializers,
  compose,
  enzymeTreeSerializer,
  minimalNativeTransform,
  print,
  replacePropTransform
} from "@tcn/jest-serializer";
import { hash } from "@tcn/test-utils";
import Watermark from "../src/watermark";

jest.mock("../assets/watermark.png", () => ({ uri: "watermark-asset" }));

export default () => {
  addSerializers(
    expect,
    enzymeTreeSerializer(),
    compose(
      print,
      minimalNativeTransform,
      replacePropTransform((value, key) => (key === "d" ? hash(value) : value))
    )
  );

  it("1. watermark", () => {
    const wrapper = shallow(<Watermark height={250} width={300} />);

    expect(wrapper).toMatchSnapshot();
  });
};
