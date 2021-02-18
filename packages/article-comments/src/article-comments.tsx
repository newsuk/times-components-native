import React, { FC } from "react";
import Comments, { CommentsProps } from "./comments";
import DisabledComments from "./disabled-comments";
import { useRemoteConfigContext } from "@times-components-native/remote-config";
import GloballyDisabledComments from "@times-components-native/article-comments/src/globally-disabled-comments";

interface Props extends CommentsProps {
  commentsEnabled?: boolean;
}

const ArticleComments: FC<Props> = ({
  articleId,
  commentCount = 0,
  commentsEnabled = false,
  narrowContent,
  onCommentGuidelinesPress,
  onCommentsPress,
  onTooltipPresented,
  tooltips,
  url,
}) => {
  const config = useRemoteConfigContext();

  if (config?.commentsGloballyDisabled) {
    return <GloballyDisabledComments />;
  }

  if (!commentsEnabled) {
    return (
      <DisabledComments onCommentGuidelinesPress={onCommentGuidelinesPress} />
    );
  }

  return (
    <Comments
      articleId={articleId}
      commentCount={commentCount}
      narrowContent={narrowContent}
      onCommentGuidelinesPress={onCommentGuidelinesPress}
      onCommentsPress={onCommentsPress}
      onTooltipPresented={onTooltipPresented}
      tooltips={tooltips}
      url={url}
    />
  );
};

export default ArticleComments;
