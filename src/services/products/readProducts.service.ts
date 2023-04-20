import { IProductResponse } from "../../interfaces/product";
import { prisma } from "../../prisma"

export const readProductsService = async ():Promise<IProductResponse[]> =>{

    const products = await prisma.products.findMany();

    return products;
}