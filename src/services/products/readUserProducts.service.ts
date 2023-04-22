import { prisma } from "../../prisma";

export const readUserProductsService = async (id: string) => {
    const announcements = await prisma.products.findMany({
      where: {
        userId: id,
      },
      include: {
        user: true,
      },
    });
  
    return announcements;
  };