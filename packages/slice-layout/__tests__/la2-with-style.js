import TestRenderer from "react-test-renderer";
import "./serializers-with-style";
import shared from "./la2.base";

export default () => shared(TestRenderer.create);
