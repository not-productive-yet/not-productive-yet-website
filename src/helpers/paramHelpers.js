export function formatCollectionParam(paramCollection) {
  return paramCollection.replaceAll(" ", "-").replaceAll(",", "");
}

export function getCollectionFromParam(param) {
  return param.collection
    ? param.collection.replaceAll("-", " ").replace("love light", "love, light")
    : null;
}
