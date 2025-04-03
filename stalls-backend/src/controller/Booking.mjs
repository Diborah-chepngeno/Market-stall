import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addbookings = async (req, res) => {
  try {
    const { vendorId, stallId, startDate, endDate, DateTime, status } =
      req.body;
    console.log(req.body);
    const booking = await prisma.booking.create({
      data: { vendorId, stallId, startDate, endDate, DateTime, status },
    });
    console.log(booking);
    res.json(booking);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Product creation failed" });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const Bookings = await prisma.booking.findMany();
    res.status(200).json(Bookings);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { vendorId, stallId, startDate, endDate, DateTime, status } = req.body;

  try {
    const booking = await prisma.booking.update({
      where: { id: parseInt(id) },
      data: {
        vendorId,
        stallId,
        startDate,
        endDate,
        DateTime,
        status,
      },
    });
    res.status(200).json(booking);
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params; // Extract shirt ID from request parameters

  try {
    const deleteBooking = await prisma.booking.delete({
      where: { id: parseInt(id) }, // Ensure ID is an integer
    });

    res
      .status(200)
      .json({ message: "Booking deleted successfully", deleteBooking });
  } catch (error) {
    console.error("Error deleting Booking:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
