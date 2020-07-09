import { iterator } from "@tcn/test-utils";
import MessageBarTests from "./message-bar.base";
import MessageManagerTests from "./message-manager.base";

export default animate => {
  const tests = [...MessageBarTests(animate), ...MessageManagerTests(animate)];

  iterator(tests);
};
