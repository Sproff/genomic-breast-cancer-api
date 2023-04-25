import { Router } from "express";

import {
  welcomePage,
  getAllBreastCancers,
  getParticularBreastCancer,
  searchParticularBreastCancer,
} from "../controllers/breast-cancer.controller";

const router = Router();

router.route("/").get(welcomePage);
router.route("/breast-cancers").get(getAllBreastCancers);
router.route("/breast-cancers/search").get(searchParticularBreastCancer);
router.route("/breast-cancers/:_id").get(getParticularBreastCancer);

export default router;
