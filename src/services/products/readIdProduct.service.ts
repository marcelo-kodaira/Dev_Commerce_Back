import { IProductResponse } from "../../interfaces/product";
import { prisma } from "../../prisma"

export const readIdProductService = (id: string):Promise<IProductResponse> =>{

    const product = prisma.product.findUnique({
        where:{
            id
        }
    });

    return product

}