import Router from "express";
// import { checkSchema } from "express-validator";
import * as stallController from "../controller/stall.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";

const stallRouter = Router();

stallRouter
  .route("/stalls")
  .post(authMiddleware, stallController.addStall)
  .get(stallController.getAllStall);

stallRouter
  .route("/stalls/:id")
  .put(stallController.updateStall)
  .delete(authMiddleware, stallController.deleteStall);

export default stallRouter;
