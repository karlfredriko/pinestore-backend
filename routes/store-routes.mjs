import express from "express";
import {
  storeInfo,
  listPines,
  getPine,
  getError,
} from "../controllers/store-controllers.mjs";

const router = express.Router();

router.route("/store").get(storeInfo);
router.route("/pines").get(listPines);
router.route("/pines/:id").get(getPine);
router.route("/*").get(getError);

export default router;
