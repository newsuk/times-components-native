import TestRenderer from "react-test-renderer";
import "./serializers-with-style";
import shared from "./clac.base";

export default () => shared(TestRenderer.create);
