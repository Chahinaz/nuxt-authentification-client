function parseQueryParameters(object) {
  let ret = [];
  for (let d in object)
    object[d] &&
    ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(object[d]))
  return ret.join("&")
}

export const createUrl = (url, object) => {
  const fullUrl = [];
  const params = parseQueryParameters(object);
  url && fullUrl.push(url);
  params && fullUrl.push(params);
  return fullUrl.join("?")
};

export default { createUrl }
