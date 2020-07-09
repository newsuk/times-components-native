import {
  topicArticles,
  topicArticlesPTV
} from "@tcn/provider-queries";
import connectGraphql from "./connect";

export default connectGraphql(topicArticles, topicArticlesPTV);
