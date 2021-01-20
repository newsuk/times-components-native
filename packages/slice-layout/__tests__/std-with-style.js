import TestRenderer from "react-test-renderer";
import "./serializers-with-style";
import shared from "./std.base";

export default () => shared(TestRenderer.create);
