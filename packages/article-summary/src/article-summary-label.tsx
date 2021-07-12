import { View } from "react-native";
import styles from "@times-components-native/article-summary/src/styles";
import VideoLabel from "@times-components-native/video-label";
import ArticleLabel from "@times-components-native/article-label";
import React, { FC } from "react";
import { MarkAsRead } from "@times-components-native/article-summary/src/MarkAsRead";

export interface ArticleSummaryLabelProps {
  articleReadState: {
    read: boolean;
    animate: boolean;
  };
  hide?: boolean;
  title: string;
  isVideo: boolean;
  color?:
    | string
    | {
        alpha: number;
        blue: number;
        green: number;
        red: number;
      };
}

const ArticleSummaryLabel: FC<ArticleSummaryLabelProps> = ({
  articleReadState,
  hide = false,
  title,
  isVideo,
  color,
}) => {
  if (hide || (!title && !isVideo)) {
    return null;
  }

  const Label = (
    <View style={styles.labelWrapper}>
      {isVideo ? (
        <VideoLabel
          childTestID="article-slug"
          title={title}
          color={typeof color === "string" ? color : undefined}
        />
      ) : (
        <ArticleLabel childTestID="article-slug" title={title} color={color} />
      )}
    </View>
  );

  if (!articleReadState) return Label;

  return <MarkAsRead articleReadState={articleReadState}>{Label}</MarkAsRead>;
};

export default ArticleSummaryLabel;
