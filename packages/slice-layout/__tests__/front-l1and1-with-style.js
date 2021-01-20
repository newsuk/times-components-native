import TestRenderer from "react-test-renderer";
import "./serializers-with-style";
import shared from "./front-l1and1.base";

export default () => shared(TestRenderer.create);
