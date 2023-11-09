import getFromDb from "../utils/dbHandler.mjs";

const storeInfo = (req, res) => {
  res.json(getFromDb("storeInfo"));
};

const listPines = (req, res) => {
  res.json(getFromDb("pines"));
};

const getPine = (req, res) => {
  const { id } = req.params;
  res.json(getFromDb("pines", id));
};

const getError = (req, res) => {
  res.json(getFromDb(req.url.slice(1)));
};

export { storeInfo, listPines, getPine, getError };
