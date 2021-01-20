import TestRenderer from "react-test-renderer";
import "./serializers";
import shared from "./front-l1.base";

export default () => shared(TestRenderer.create);
