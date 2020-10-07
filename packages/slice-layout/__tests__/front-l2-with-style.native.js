import TestRenderer from "react-test-renderer";
import "./serializers-with-all-styles.native";
import shared from "./front-l2.base";

export default () => shared(TestRenderer.create);
