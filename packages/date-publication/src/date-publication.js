import React from "react";
import PropTypes from "prop-types";
import DateTime from "./date-time";
import publicationString, { publications } from "./publication";

const DatePublication = ({ publication, ...props }) => (
  <DateTime {...props}>
    {(dateTime) => `${dateTime}${publicationString(publication)}`}
  </DateTime>
);

DatePublication.propTypes = {
  date: PropTypes.string.isRequired,
  publication: PropTypes.oneOf(Object.keys(publications)),
  showDay: PropTypes.bool,
};

DatePublication.defaultProps = { ...DateTime.defaultProps, publication: null };

export default DatePublication;
