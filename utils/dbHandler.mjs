import { createRequire } from "module";
const require = createRequire(import.meta.url);
const db = require("../db.json");

const getFromDb = (path, checkId = null) => {
  const response = {
    status: "Not found",
    statusCode: 404,
    data: null,
    error: null,
  };
  if (checkId) {
    const pineDetails = db[path].find((pine) => pine.id === checkId);

    if (pineDetails) {
      response.status = "Success";
      response.statusCode = 200;
      response.data = pineDetails;
    } else {
      response.error = `db.${path}/${checkId} not found`;
    }
  } else {
    const data = db[path];
    if (data) {
      response.status = "Success";
      response.statusCode = 200;
      response.data = data;
    } else {
      response.error = `dp.${path} not found`;
    }
  }
  return response;
};

export default getFromDb;
