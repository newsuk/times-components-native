import TestRenderer from "react-test-renderer";
import "./serializers";
import shared from "./clac.base";

export default () => shared(TestRenderer.create);
