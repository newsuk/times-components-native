import PropTypes from "prop-types";

const articleSkeletonPropTypes = {
  adConfig: PropTypes.shape({}),
  analyticsStream: PropTypes.func.isRequired,
  data: PropTypes.shape({}),
  Header: PropTypes.func.isRequired,
  navigationMode: PropTypes.shape({}),
  receiveChildList: PropTypes.func,
  spotAccountId: PropTypes.string,
};

const articleSkeletonDefaultProps = {
  adConfig: {},
  data: { content: [] },
  Header: () => null,
  receiveChildList: () => null,
};

export { articleSkeletonPropTypes, articleSkeletonDefaultProps };
