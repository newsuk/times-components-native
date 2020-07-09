import React from "react";
import {
  authorArticlesNoImages,
  authorArticlesNoImagesPTV
} from "@tcn/provider-queries";
import connectGraphql from "./connect";

const AuthorArticlesNoImagesProvider = connectGraphql(
  authorArticlesNoImages,
  authorArticlesNoImagesPTV
);

export default props => (
  <AuthorArticlesNoImagesProvider
    {...props}
    longSummaryLength={220}
    shortSummaryLength={220}
  />
);
