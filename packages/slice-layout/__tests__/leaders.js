import TestRenderer from "react-test-renderer";
import "./serializers";
import shared from "./leaders.base";

export default () => shared(TestRenderer.create);
