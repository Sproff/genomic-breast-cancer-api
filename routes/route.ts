import { Router } from "express";

import {
  welcomePage,
  getAllBreastCancers,
  getParticularBreastCancer,
  searchParticularBreastCancer,
} from "../controllers/breast-cancer.controller";

const router = Router();

router.route("/").get(welcomePage);

router
  .route("/breast-cancers")
  .get(getAllBreastCancers)
  .get(searchParticularBreastCancer);

router.route("/breast-cancers/:slug").get(getParticularBreastCancer);

export default router;
