import { Router } from "express";
import categoryRouter from "./category.mjs";
import productRouter from "./products.mjs";
import userRouter from "./users.mjs";
import stallRouter from "./stall.mjs";
import bookingsRouter from "./Booking.mjs";

const router = Router();

router.use(categoryRouter);
router.use(productRouter);
router.use(userRouter);
router.use(stallRouter);
router.use(bookingsRouter);

export default router;
