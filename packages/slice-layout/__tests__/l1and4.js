import TestRenderer from "react-test-renderer";
import "./serializers";
import shared from "./l1and4.base";

export default () => shared(TestRenderer.create);
