import TestRenderer from "react-test-renderer";
import "./serializers";
import shared from "./l2np2variant2.base";

export default () => shared(TestRenderer.create);
