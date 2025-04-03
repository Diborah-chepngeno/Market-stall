import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categoryMiddleware = async (req, res, next) => {
  const { id } = req.params;

  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return res.sendStatus(400);
  }

  const category = await prisma.category.findUnique({
    where: {
      id: parsedId,
    },
  });

  if (!category) {
    return res.sendStatus(404);
  }
  req.dressId = parsedId;
  next();
};

export default categoryMiddleware;
