import {
  authorArticlesWithImages,
  authorArticlesWithImagesPTV
} from "@tcn/provider-queries";
import connectGraphql from "./connect";

export default connectGraphql(
  authorArticlesWithImages,
  authorArticlesWithImagesPTV
);
