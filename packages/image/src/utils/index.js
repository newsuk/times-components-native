import url from "url";

export const getAspectRatio = (ratio) => {
  const [ratioWidth, ratioHeight] = ratio && ratio.split(":");

  return Number(ratioWidth) / Number(ratioHeight);
};

export const getCropByRatio = (ratio) => {
  const [ratioWidth, ratioHeight] = ratio && ratio.split(":");

  return `crop${ratioWidth}${ratioHeight}`;
};

const appendParamsToQuery = (uriString, paramMap) => {
  if (!uriString || !paramMap) {
    return uriString;
  }

  const uri = url.parse(uriString, true);
  uri.search = undefined;
  Object.assign(uri.query, paramMap);
  return url.format(uri);
};

export default appendParamsToQuery;
