import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await prisma.category.create({
      data: { name },
    });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Category creation failed" });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteCategory = await prisma.category.delete({
      where: { id: parseInt(id) }, // Ensure ID is an integer
    });

    res
      .status(200)
      .json({ message: "category deleted successfully", deleteCategory });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
