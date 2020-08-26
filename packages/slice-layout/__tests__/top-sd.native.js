import TestRenderer from "react-test-renderer";
import "./serializers.native";
import shared from "./top-sd.base";

export default () => shared(TestRenderer.create);
