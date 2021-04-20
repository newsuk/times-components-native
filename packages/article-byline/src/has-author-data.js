import hasBylineData from "./has-byline-data";

export default (bylines) =>
  hasBylineData(bylines) &&
  bylines.find((object) => {
    return object.byline[0].name === "author";
  });
