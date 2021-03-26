import React, { FC } from "react";
import { Text } from "react-native";
import DatePublication from "@times-components-native/date-publication";
import { Hit } from "../types";
import { styles } from "./styles/formattedDateStyles";

export interface FormattedDateProps {
  publishedTime: Hit["publishedTime"];
  publicationName: Hit["publicationName"];
}

const FormattedDate: FC<FormattedDateProps> = ({
  publishedTime,
  publicationName,
}) => (
  <Text style={styles.metaText} testID="datePublication">
    <DatePublication
      date={publishedTime}
      publication={
        publicationName &&
        (publicationName.toUpperCase() as "SUNDAYTIMES" | "TIMES")
      }
      showDay
    />
  </Text>
);

export default FormattedDate;
