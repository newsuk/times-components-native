import PropTypes from "prop-types";
import {
  articlePagePropTypes,
  articlePageDefaultProps,
} from "./article-prop-types.base";

const articlePropTypes = {
  ...articlePagePropTypes,
  analyticsStream: PropTypes.func.isRequired,
  interactiveConfig: PropTypes.shape({}),
  onArticleRead: PropTypes.func.isRequired,
  onAuthorPress: PropTypes.func.isRequired,
  onCommentGuidelinesPress: PropTypes.func.isRequired,
  onCommentsPress: PropTypes.func.isRequired,
  onLinkPress: PropTypes.func.isRequired,
  onRelatedArticlePress: PropTypes.func.isRequired,
  onTooltipPresented: PropTypes.func,
  onTopicPress: PropTypes.func.isRequired,
  onTwitterLinkPress: PropTypes.func.isRequired,
  onVideoPress: PropTypes.func.isRequired,
  onViewed: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

const articleDefaultProps = {
  ...articlePageDefaultProps,
  interactiveConfig: {},
  onTooltipPresented: () => null,
};

export { articlePropTypes, articleDefaultProps };
