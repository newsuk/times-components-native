import TestRenderer from "react-test-renderer";
import "./serializers-with-style";
import shared from "./sl1and1.base";

export default () => shared(TestRenderer.create);
