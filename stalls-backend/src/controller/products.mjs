import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addProduct = async (req, res) => {
  try {
    const { name, price, quantity, image, stallId, categoryId } = req.body;
    console.log(req.body);
    const product = await prisma.product.create({
      data: { name, price, quantity, image, stallId, categoryId },
    });
    console.log(product);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Product creation failed" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const { categoryId, name } = req.query;

    const filters = {};

    if (categoryId) {
      filters.categoryId = parseInt(categoryId);
    }

    if (name) {
      filters.name = { contains: name, mode: "insensitive" };
    }

    const products = await prisma.product.findMany({
      where: filters,
    });

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity, image, stallId, categoryId } = req.body;

  try {
    const existingProduct = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        name: name,
        price: parseInt(price),
        image: image,
        quantity: parseInt(quantity),
        categoryId: parseInt(categoryId),
        stallId: parseInt(stallId),
      },
    });
    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id);

  const deletedProduct = await prisma.product.delete({
    where: { id },
  });

  res.sendStatus(200);
};
