import { adConfig } from "./ad-mock";

const sharedProps = {
  adConfig,
  analyticsStream: () => null,
  onAuthorPress: () => null,
  onCommentGuidelinesPress: () => null,
  onCommentsPress: () => null,
  onLinkPress: () => null,
  onRelatedArticlePress: () => null,
  onTopicPress: () => null,
  onTwitterLinkPress: () => null,
  onVideoPress: () => null,
  onViewed: () => null,
  receiveChildList: () => null,
  refetch: () => null,
};

export default sharedProps;
