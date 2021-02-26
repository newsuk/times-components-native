import React, { FC } from "react";
import DateTime from "./date-time";
import publicationString from "./publication";

export interface DatePublicationProps {
  date: string;
  publication?: "SUNDAYTIMES" | "TIMES" | null;
  showDay?: boolean;
}

const DatePublication: FC<DatePublicationProps> = ({
  publication = null,
  showDay = true,
  date,
}) => (
  <DateTime date={date} showDay={showDay}>
    {(dateTime: string) => `${dateTime}${publicationString(publication)}`}
  </DateTime>
);

export default DatePublication;
