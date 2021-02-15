import React, { FC } from "react";
import Comments, { CommentsProps } from "./comments";
import DisabledComments from "./disabled-comments";
import { useRemoteConfigContext } from "@times-components-native/remote-config";

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

  return commentsEnabled && !config?.commentsGloballyDisabled ? (
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
  ) : (
    <DisabledComments onCommentGuidelinesPress={onCommentGuidelinesPress} />
  );
};

export default ArticleComments;
