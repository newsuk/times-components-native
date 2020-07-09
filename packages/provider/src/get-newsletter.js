import { getNewsletter } from "@tcn/provider-queries";
import connectGraphql from "./connect";

export default connectGraphql(getNewsletter);
