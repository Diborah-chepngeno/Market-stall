import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addStall = async (req, res) => {
  try {
    const { number, location, size, isOccupied, vendorId } = req.body;
    console.log(req.body);
    const stall = await prisma.stall.create({
      data: { number, location, size, isOccupied, vendorId },
    });
    console.log(stall);
    res.json(stall);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Product creation failed" });
  }
};

export const getAllStall = async (req, res) => {
  try {
    const stalls = await prisma.stall.findMany();
    res.status(200).json(stalls);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateStall = async (req, res) => {
  const { id } = req.params;
  const { number, location, size, isOccupied, vendorId } = req.body;

  try {
    const stall = await prisma.stall.update({
      where: { id: parseInt(id) },
      data: {
        number,
        location,
        size,
        isOccupied,
        vendorId,
      },
    });
    res.status(200).json(stall);
  } catch (error) {
    console.error("Error updating stall:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteStall = async (req, res) => {
  const { id } = req.params; // Extract shirt ID from request parameters

  try {
    const deleteStall = await prisma.stall.delete({
      where: { id: parseInt(id) }, // Ensure ID is an integer
    });

    res
      .status(200)
      .json({ message: "Stall deleted successfully", deleteStall });
  } catch (error) {
    console.error("Error deleting Stall:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
