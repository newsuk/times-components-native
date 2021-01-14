import format from "date-fns/format";

export const getEmailPuzzlesUrl = (publishedTime: any) =>
  publishedTime
    ? `https://times.formstack.com/forms/puzzles_${format(
        publishedTime,
        "DD_MM_YYYY",
      )}`
    : ``;
