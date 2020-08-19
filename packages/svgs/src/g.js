import React from "react";
import { Group } from "@react-native-community/art";
import PropTypes from "prop-types";

const G = ({ fill, stroke, strokeWidth, opacity, children }) => {
  const onlyAssignedProps = (props) => (key) => props[key] !== null;
  const reconstructProps = (props) => (obj, key) => ({
    [key]: props[key],
    ...obj,
  });

  const childrenWithProps = React.Children.map(children, (child) => {
    const originalProps = child.props;
    const cleanProps = Object.keys(originalProps)
      .filter(onlyAssignedProps(originalProps))
      .reduce(reconstructProps(originalProps), {});

    return React.cloneElement(child, {
      fill,
      opacity,
      stroke,
      strokeWidth,
      ...cleanProps,
    });
  });
  return (
    <Group fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
      {childrenWithProps}
    </Group>
  );
};

G.propTypes = {
  children: PropTypes.node.isRequired,
  fill: PropTypes.string,
  opacity: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

G.defaultProps = {
  fill: null,
  opacity: null,
  stroke: null,
  strokeWidth: null,
};

export default G;
