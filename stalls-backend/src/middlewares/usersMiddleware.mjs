import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userMiddleware = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return res.sendStatus(400);
  }

  const user = await prisma.user.findUnique({
    where: {
      id: parsedId,
    },
  });

  if (!user) {
    return res.sendStatus(404);
  }
  req.userId = parsedId;
  next();
};

export default userMiddleware;
