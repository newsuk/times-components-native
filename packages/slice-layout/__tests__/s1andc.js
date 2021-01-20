import TestRenderer from "react-test-renderer";
import "./serializers";
import shared from "./s1andc.base";

export default () => shared(TestRenderer.create);
