import omitBy from "lodash.omitby";

interface Dictionary<T> {
  [index: string]: T;
}

const clean = <T>(obj: Dictionary<T>) => {
  return omitBy(
    obj,
    (x) => x === undefined || Number.isNaN((x as unknown) as number),
  );
};

export default clean;
