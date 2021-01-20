import TestRenderer from "react-test-renderer";
import "./serializers";
import shared from "./top-sd.base";

export default () => shared(TestRenderer.create);
