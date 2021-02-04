import TestRenderer from "react-test-renderer";
import "./serializers-with-style";
import shared from "./sl1and4v2.base";

export default () => shared(TestRenderer.create);
