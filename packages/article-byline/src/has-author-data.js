export default (bylines) =>
  bylines.find((object) => {
    return object.byline[0].name === "author";
  });
