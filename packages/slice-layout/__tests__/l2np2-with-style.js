import TestRenderer from "react-test-renderer";
import "./serializers-with-style";
import shared from "./l2np2.base";

export default () => shared(TestRenderer.create);
