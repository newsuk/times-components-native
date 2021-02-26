import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import DatePublication from "@times-components-native/date-publication";
import { Hit } from "../types";
import styleguide from "@times-components-native/styleguide";

export interface FormattedDateProps {
  publishedTime: Hit["publishedTime"];
  publicationName: Hit["publicationName"];
}

const FormattedDate: FC<FormattedDateProps> = ({
  publishedTime,
  publicationName,
}) => {
  return (
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
};

const { colours, fontFactory, spacing } = styleguide();
const styles = StyleSheet.create({
  metaText: {
    color: colours.functional.secondary,
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMeta",
    }),
    marginVertical: spacing(2),
  },
});

export default FormattedDate;
