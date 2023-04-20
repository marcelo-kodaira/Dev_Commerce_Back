import { IProductResponse } from "../../interfaces/product";
import { prisma } from "../../prisma"

export const getNameProductService = async (name:string):Promise<IProductResponse> =>{
    const products = await prisma.product.findMany({
        where:{
            name:{
                contains:name
            }
        }
    });
    return products
}