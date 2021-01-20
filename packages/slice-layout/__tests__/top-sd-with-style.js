import TestRenderer from "react-test-renderer";
import "./serializers-with-style.native";
import shared from "./top-sd.base";

export default () => shared(TestRenderer.create);
