import { IProductResponse } from "../../interfaces/product";
import { prisma } from "../../prisma"

export const readNameProductService = async (name:string):Promise<IProductResponse[]> =>{
    const products = await prisma.products.findMany({
        where:{
            name:{
                contains:name
            }
        },select:{
            id: true,
            name: true,
            price: true,
            description: true,
            user:{
              select:{
                name: true,
                email: true
              }
            }
          }
    });
    return products
}