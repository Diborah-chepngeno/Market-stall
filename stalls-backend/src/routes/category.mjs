import { Router } from "express";
import * as categoryController from "../controller/category.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";
import cateoryMiddleware from "../middlewares/categoryMiddleware.mjs";

const categoryRouter = Router();

categoryRouter
  .route("/categories")
  .post(categoryController.addCategory)
  .get(categoryController.getAllCategories);

categoryRouter
  .route("/categories/:id")
  .put(authMiddleware, categoryController.updateCategory)
  .delete(cateoryMiddleware, authMiddleware, categoryController.deleteCategory);

export default categoryRouter;
