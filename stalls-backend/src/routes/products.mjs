import Router from "express";
import { checkSchema } from "express-validator";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";
import * as productcontroller from "../controller/products.mjs";
import { productSchema } from "../schemas/productsSchema.mjs";

const productRouter = Router();

productRouter
  .route("/products")
  .get(productcontroller.getAllProducts)
  .post(
    checkSchema(productSchema),
    authMiddleware,
    productcontroller.addProduct
  );

productRouter
  .route("/products/:id")
  .put(checkSchema(productSchema), productcontroller.updateProducts)
  .delete(productcontroller.deleteProduct);

productRouter
  .route("/products")
  .post(productcontroller.addProduct)
  .get(productcontroller.getAllProducts);

export default productRouter;
