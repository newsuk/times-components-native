import React from "react";
import { shallow } from "enzyme";
import {
  addSerializers,
  compose,
  enzymeRootSerializer,
  minimaliseTransform,
  print,
} from "@times-components-native/jest-serializer";
import adConfig from "../fixtures/article-ad-config.json";
import Ad from "../src/ad";

const props = {
  contextUrl: "https://www.thetimes.co.uk",
  section: "news",
  style: {
    backgroundColor: "red",
  },
  adConfig,
};

export default () => {
  addSerializers(
    expect,
    enzymeRootSerializer(),
    compose(
      print,
      minimaliseTransform((value, key) => key === "style" || key === "value"),
    ),
  );

  it("advert", () => {
    const wrapper = shallow(<Ad {...props} slotName="header" />);

    expect(wrapper).toMatchSnapshot();
  });

  it("advert with width", () => {
    const wrapper = shallow(<Ad {...props} slotName="header" width={300} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("advert with narrow content", () => {
    const wrapper = shallow(
      <Ad {...props} slotName="header" narrowContent={true} />,
    );

    expect(wrapper).toMatchSnapshot();
  });
};
