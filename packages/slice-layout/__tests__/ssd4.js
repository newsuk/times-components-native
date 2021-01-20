import TestRenderer from "react-test-renderer";
import "./serializers.native";
import shared from "./ssd4.base";

export default () => shared(TestRenderer.create);
