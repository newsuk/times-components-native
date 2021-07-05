import React, { FC } from "react";
import { Text, View } from "react-native";
import DateTime from "./date-time";
import publicationString from "./publication";

export interface DatePublicationProps {
  date: string;
  publication?: "SUNDAYTIMES" | "TIMES" | null;
  showDay?: boolean;
  style?: any;
}

const DatePublication: FC<DatePublicationProps> = ({
  publication = null,
  showDay = true,
  date,
  style = {},
}) => (
  <DateTime date={date} showDay={showDay}>
    {(dateTime: string) => {
      const publicationText = publicationString(publication);
      const showPublicationText = publicationText.trim() !== "";
      return (
        <View style={{ flexDirection: "row" }}>
          <Text style={style} testID={"date-time"}>
            {dateTime}
          </Text>
          {showPublicationText && (
            <Text style={style} testID={"publication-name"}>
              {publicationText}
            </Text>
          )}
        </View>
      );
    }}
  </DateTime>
);

export default DatePublication;
