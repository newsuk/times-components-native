import TestRenderer from "react-test-renderer";
import "./serializers-with-all-styles";
import shared from "./front-l1.base";

export default () => shared(TestRenderer.create);
