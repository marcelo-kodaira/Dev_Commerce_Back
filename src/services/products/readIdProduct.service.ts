import { IProductResponse } from "../../interfaces/product";
import { prisma } from "../../prisma"

export const readIdProductService = (id: string):Promise<IProductResponse | null> =>{

    const product = prisma.products.findUnique({
        where:{
            id
        }
    });

    return product

}