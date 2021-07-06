import React, { FC } from "react";
import DatePublication from "@times-components-native/date-publication";
import { Hit } from "../types";
import { styles } from "./styles/formatted-date-styles";

export interface FormattedDateProps {
  publishedTime: Hit["publishedTime"];
  publicationName: Hit["publicationName"];
}

const FormattedDate: FC<FormattedDateProps> = ({
  publishedTime,
  publicationName,
}) => (
  <DatePublication
    style={styles.metaText}
    date={publishedTime}
    publication={
      publicationName &&
      (publicationName.toUpperCase() as "SUNDAYTIMES" | "TIMES")
    }
    showDay
  />
);

export default FormattedDate;
