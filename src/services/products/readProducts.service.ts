import { IUserResponse } from "../../interfaces/user";
import { prisma } from "../../prisma"

export const readProductsService = async ():Promise<IUserResponse[]> =>{

    const products = await prisma.product.findMany();

    return products;
}