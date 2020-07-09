import React from "react";
import ArticleLabel from "@tcn/article-label";
import Context from "@tcn/context";
import { colours } from "@tcn/styleguide";
import VideoLabel from "@tcn/video-label";
import styles from "../styles/article-header";

export default render => ({ isVideo, label }) => {
  if (!isVideo && !label) return null;

  const Label = isVideo ? VideoLabel : ArticleLabel;

  return render(
    {
      style: styles.articleLabel,
      testID: "label"
    },
    <Context.Consumer>
      {({ theme: { sectionColour } }) => (
        <Label color={sectionColour || colours.section.default} title={label} />
      )}
    </Context.Consumer>
  );
};
