import Router from "express";
// import { checkSchema } from "express-validator";
import * as bookingsController from "../controller/Booking.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";

const bookingsRouter = Router();

bookingsRouter
  .route("/bookings")
  .post(authMiddleware, bookingsController.addbookings)
  .get(bookingsController.getAllBooking);

bookingsRouter
  .route("/bookings/:id")
  .put(bookingsController.updateBooking)
  .delete(authMiddleware, bookingsController.deleteBooking);

export default bookingsRouter;
